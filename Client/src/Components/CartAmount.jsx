import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CartAmount({ amount, decrease, increase }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={decrease}>
          <FaMinus />
        </button>
        <span className="amount-style">{amount}</span>
        <button onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
