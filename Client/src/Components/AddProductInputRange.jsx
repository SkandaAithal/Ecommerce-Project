import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

function AddProductInputRange({ dispatchAddProduct, stars }) {
  const handlerangeChange = (event) => {
    dispatchAddProduct({
      type: "STARS_RANGE",
      payload: event.target.value / 100,
    });
  };

  return (
    <Wrapper>
      <label>
        <h3>Stars :</h3>
        <div className="custom-range-container">
          <input
            type="range"
            min="0"
            max="500"
            value={stars * 100}
            onChange={handlerangeChange}
            className="custom-range"
          />
          <div className="custom-range-value">
            <Stars stars={stars} />
            <p>{stars} stars</p>
          </div>
        </div>
      </label>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: start;
  display: flex;
  justify-content: center;

  label {
    display: grid;
    gap: 1rem;
  }

  .custom-range-container {
    position: relative;
    width: 20vw; // Corrected from 20dvw to 20vw
  }

  .custom-range {
    -webkit-appearance: none;
    height: 10px;
    width: 100%; // Set to 100% to fill the container
    background: #d3d3d3;
    border-radius: 5px;
    outline: none;
    margin: 5px 0;
  }

  .custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    transform: translateY(-0.5rem);
    background: #5f06c0;
    border-radius: 50%;
    cursor: pointer;
  }

  .custom-range::-moz-range-thumb {
    width: 2rem;
    height: 2rem;
    background: #5f06c0;
    border-radius: 50%;
    cursor: pointer;
  }

  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: #5f06c0;
    border-radius: 5px;
  }

  .custom-range::-moz-range-track {
    width: 100%;
    height: 10px;
    background: #5f06c0;
    border-radius: 5px;
  }

  .custom-range-value {
    display: flex;
    width: max-content;
    gap: 1rem;
  }

  @media (max-width: 998px) {
    display: block;
  }
`;

export default AddProductInputRange;
