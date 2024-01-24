import React, { memo, useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import LoadingSpinner from "../helpers/LoadingSpinner";
import axios from "axios";
import { useUserContext } from "../context/userscontext";
import { useNavigate } from "react-router-dom";
import { useSellerContext } from "../context/sellercontext";
import { useProductContext } from "../context/productcontext";

const ImageUploader = ({ productName }) => {
  const [isloading, setIsLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const { dispatchUser } = useUserContext();
  const { dispatchSeller } = useSellerContext();
  const { dispatch } = useProductContext();
  const navigate = useNavigate();

  const UPLOAD_IMAGE_API_URL = "http://localhost:4000/images/imageupload";
  useEffect(() => {
    getImages(productName);
  }, []);

  const getImages = async (productName) => {
    try {
      if (productName) {
        const { data } = await axios.get(
          `http://localhost:4000/images/getimages?productName=${productName}`
        );
        setAllImages(data);
      }
    } catch (err) {}
  };
  const handleImageChange = async (e) => {
    const files = e.target.files;
    if (!productName) {
      window.scrollTo(0, 0);
      return dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message: "Your Product name is Mandatory",
          color: "red",
        },
      });
    }

    if (files && files.length > 0) {
      try {
        setIsLoading(true);

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }
        formData.append("name", productName);

        const { data } = await axios.post(UPLOAD_IMAGE_API_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        getImages(productName);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    }
  };

  const removeImage = async (id) => {
    try {
      if (!productName) {
        window.scrollTo(0, 0);
        return dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "Your Product name is Mandatory",
            color: "red",
          },
        });
      }

      const { data } = await axios.delete(
        `http://localhost:4000/images/removeimage?pid=${id}`
      );
      if (!data.error) {
        getImages(productName);
      }
    } catch (err) {}
  };

  const addImagesButton = async () => {
    if (isloading) {
      return dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message:
            "Your Images are getting uploaded, This might take some time",
          color: "red",
        },
      });
    }
    if (!allImages.length) {
      return dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message: "Add Images for your Product",
          color: "red",
        },
      });
    }
    dispatchUser({
      type: "SHOW_NOTIFICATION",
      payload: {
        message: "Images are added successfully",
        color: "green",
      },
    });
    dispatchSeller({ type: "REFRESH" });
    dispatch({ type: "REFRESH" });
    navigate("/sellerproducts");
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
      <h2 className="title">
        {isloading
          ? "Your Images are being uploaded to Server"
          : `Choose Your Images for ${productName} :`}
      </h2>
      <ImageGrid>
        {allImages.length
          ? allImages.map((image, index) => (
              <ImageCard key={index}>
                <img src={`http://localhost:4000/uploads/${image.url}`} />

                <FaTimes
                  className="remove-icon"
                  onClick={() => {
                    removeImage(image._id);
                  }}
                />
              </ImageCard>
            ))
          : null}

        <label htmlFor="file-input">
          <div
            style={{
              display: "grid",
              placeContent: "center",
              height: "100%",
              borderRadius: "8px",
              backgroundColor: "#e3cc9f81",
              boxShadow: " 0 0 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            {isloading ? (
              <LoadingSpinner />
            ) : (
              <FaPlus style={{ color: "white", fontSize: "6rem" }} />
            )}
          </div>
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          disabled={isloading}
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </ImageGrid>
      <p
        className="button"
        onClick={addImagesButton}
        style={{ margin: "auto" }}
      >
        Add Images
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;
  padding-inline: 3rem;

  .title {
    margin: auto;
    padding: 2rem;
    text-transform: capitalize;
  }
  .button {
    text-decoration: none;
    width: max-content;
    background-color: rgb(98 84 243);
    color: rgb(255 255 255);
    padding: 1.4rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: scale(0.96);
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 27rem);
  gap: 16px;
  /* grid-auto-columns: 25rem; */
  place-content: center;
  grid-auto-rows: 20rem;
  @media (max-width: 600px) and (min-width: 275px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1220px) and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove-icon {
    position: absolute;
    font-size: 3rem;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 4px;
    border-radius: 50%;
  }
`;

export default memo(ImageUploader);
