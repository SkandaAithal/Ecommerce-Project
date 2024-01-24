import React, { useCallback, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import reducerFunction from "../Reducer/addproductReducer";
import { useUserContext } from "../context/userscontext";
import ImageUploader from "./ImageUploader";
import Colors from "./Colors";
import ProductForm from "./ProductForm";
import AddProductInputRange from "./AddProductInputRange";
import axios from "axios";
import { decrypt } from "../helpers/encryptdecrypt";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const { dispatchUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [istoken, setIsToken] = useState("");
  const [productUpdated, setProductUpdated] = useState(false);

  const initialState = {
    name: "",
    company: "",
    price: 0,
    description: "",
    category: "",
    shipping: false,
    featured: false,
    stock: 0,
    reviews: 0,
    stars: 5,
    colors: [],
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const GET_PRODUCT_URL = `http://localhost:4000/products/singleproduct?pid=${id}`;
  const UPDATE_PRODUCT_URL = `http://localhost:4000/products/updateproduct?pid=${id}`;
  const secretKey = "sX8nD4zH1cT6kA2yP7uV3wR9qG5pL0J9";
  const [state, dispatchAddProduct] = useReducer(reducerFunction, initialState);
  const encryptToken = localStorage.getItem("userToken");

  //! to check for token and get su=ingle product

  useEffect(() => {
    const abortController = new AbortController();
    if (!encryptToken) {
      dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message: "You must be logged in to Update your product",
          color: "red",
        },
      });
      dispatchUser({ type: "OPEN_LOGIN" });
      navigate("/");
    } else {
      const token = decrypt(encryptToken, secretKey);
      setIsToken(token);
      const getSingleProduct = async () => {
        try {
          const { data } = await axios.get(GET_PRODUCT_URL, {
            signal: abortController.signal,
            headers: {
              authorization: token,
            },
          });

          dispatchAddProduct({
            type: "DATA_FROM_SERVER",
            payload: data.singleproduct[0],
          });
        } catch (err) {
          dispatchUser({
            type: "SHOW_NOTIFICATION",
            payload: {
              message: err.response.data.message,
              color: "red",
            },
          });
        }
      };

      getSingleProduct();
    }

    return () => {
      abortController.abort();
    };
  }, []);

  // ! add color to product
  const addcolorToArray = useCallback(
    (color) => {
      if (state.colors.includes(color)) {
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "You have already selected that color",
            color: "red",
          },
        });
      } else {
        dispatchAddProduct({ type: "ADD_COLOR", payload: color });
      }
    },
    [state.colors]
  );

  const removeColor = useCallback(
    (index) => {
      dispatchAddProduct({ type: "REMOVE_COLOR", payload: index });
    },
    [state.colors]
  );

  const productSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      delete state.images;
      if (
        Object.values(state).every(
          (data) =>
            data !== "" && (Array.isArray(data) ? data.length > 0 : true)
        )
      ) {
        const submitData = {};
        Object.keys(state).forEach((key) => {
          const value = state[key];
          submitData[key] =
            typeof value === "string" ? value.toLowerCase().trim() : value;
        });

        const { data } = await axios.put(UPDATE_PRODUCT_URL, submitData, {
          headers: {
            authorization: istoken,
          },
        });

        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: data.message,
            color: "green",
          },
        });
        setProductUpdated(true);
      } else {
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "Please fill in all product details before submitting.",
            color: "red",
          },
        });
      }
    } catch (err) {
      dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message: err.response.data.message,
          color: "red",
        },
      });
    } finally {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      {productUpdated ? (
        <ImageUploader productName={state.name.toLowerCase().trim()} />
      ) : (
        <div className="updateproduct-container">
          <h2 style={{ marginBottom: "1rem" }}>Update Product!</h2>

          <form onSubmit={productSubmit}>
            <ProductForm
              dispatchAddProduct={dispatchAddProduct}
              state={state}
              updation={true}
            />
            <AddProductInputRange
              dispatchAddProduct={dispatchAddProduct}
              stars={state.stars}
            />
            <Colors
              colors={state.colors}
              addcolorToArray={addcolorToArray}
              removeColor={removeColor}
            />

            <div>
              {isLoading ? (
                <input type="submit" value={"Loading.."} disabled />
              ) : (
                <input type="submit" value={"Update product"} />
              )}
            </div>
          </form>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .updateproduct-container {
    width: 60vw;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    form {
      display: grid;
      gap: 2rem;
    }
    .color-container {
      display: flex;
      justify-content: center;
      text-align: center;

      flex-direction: column;
    }
    .colors {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: auto;

      .color-box {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      .color {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        box-shadow: 0px 0px 5px 2px #dad9db;
      }

      .cross {
        color: #ff0000;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }

  input[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;

    min-width: fit-content;
    margin: 3rem auto;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
  label,
  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  @media (max-width: 998px) {
    .updateproduct-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 60dvw;
    }
  }

  @media (max-width: 768px) {
    .updateproduct-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 70dvw;
    }
  }
  @media (max-width: 400px) {
    .updateproduct-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 90dvw;
    }
  }
`;
export default UpdateProduct;
