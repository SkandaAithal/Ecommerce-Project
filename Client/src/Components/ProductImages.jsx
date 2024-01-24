import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

import LazyImage from "../helpers/LazyImage";

const ProductImages = ({ image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePaginationClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Wrapper>
      <div className="image-carousel-wrapper">
        {image && (
          <>
            <div
              className="carousel-container"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {image.map((img, index) => (
                <div key={index} className="carousel-image" data-index={index}>
                  <LazyImage
                    className="lazy-image"
                    src={img.url}
                    blurhash={img.blurHash}
                  />
                </div>
              ))}
            </div>
            <div className="carousel-button left" onClick={handlePrevClick}>
              <FaChevronLeft className="carousel-button-icon" />
            </div>
            <div className="carousel-button right" onClick={handleNextClick}>
              <FaChevronRight className="carousel-button-icon" />
            </div>
            <div className="pagination-container">
              {image.map((_, index) => (
                <div
                  key={index}
                  className={`pagination-button ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => handlePaginationClick(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductImages;

const Wrapper = styled.div`
  /* ImageCarousel.css */

  .image-carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-image {
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    flex-shrink: 0;
    height: 70vh; /* Adjust as needed */
    overflow: hidden;
  }

  .carousel-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 2rem;
    color: white;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .carousel-button.left {
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel-button.right {
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .carousel-button-icon {
    width: 100%;
    height: 100%;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .pagination-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .pagination-button.active {
    background-color: #000000;
  }

  .pagination-button:hover {
    background-color: #000000;
  }
`;
