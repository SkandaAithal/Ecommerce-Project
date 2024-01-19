import React from "react";
import ColorPicker from "./ColorPicker";
import { FaTimes } from "react-icons/fa";

export default function Colors({ colors, addcolorToArray, removeColor }) {
  return (
    <div className="color-container">
      <ColorPicker addcolorToArray={addcolorToArray} />
      <div className="colors">
        <p style={{ color: "black" }}>Your Colors :</p>
        {colors.length ? (
          colors.map((rgbcolor, index) => {
            return (
              <div className="color-box" key={index}>
                <div
                  className="color"
                  style={{
                    backgroundColor: rgbcolor,
                  }}
                ></div>
                <FaTimes className="cross" onClick={() => removeColor(index)} />
              </div>
            );
          })
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>Add your colors!!</p>
        )}
      </div>
    </div>
  );
}
