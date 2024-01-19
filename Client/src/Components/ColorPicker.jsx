import React, { memo, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import styled from "styled-components";
import { Button } from "../styles/Button";

const ColorPicker = ({ addcolorToArray }) => {
  const [color, setColor] = useState({ r: 255, g: 0, b: 0, a: 1 });
  const [openColor, setOpenColor] = useState(false);

  const handleChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <Wrapper>
      <div className="color-picker">
        <h3>
          Selected Color : rgba({color.r}, {color.g}, {color.b}, {color.a})
        </h3>
        {openColor ? (
          <button
            type="button"
            onClick={() => {
              setOpenColor(!openColor);
              let rgbColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
              addcolorToArray(rgbColor);
            }}
          >
            Add color
          </button>
        ) : (
          <button type="button" onClick={() => setOpenColor(!openColor)}>
            Choose Color
          </button>
        )}
        {openColor && (
          <div className="chromepicker">
            <RgbaColorPicker color={color} onChange={handleChange} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 30rem;
  margin: auto;
  .color-picker {
    position: relative;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  button {
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
  .chromepicker {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (min-width: 768px) {
    .chromepicker {
      top: 0;
      left: calc(100% + 10px);
      transform: translateY(-50%);
    }
  }
`;

export default memo(ColorPicker);
