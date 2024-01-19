import React from "react";
import FormatPrice from "../helpers/FormatPrice";

function CartBill({ total_price, shippingfee }) {
  return (
    <div className="order-total--amount">
      <div className="order-total--subdata">
        <div>
          <p>SubTotal :</p>
          <p>
            <FormatPrice price={total_price} />
          </p>
        </div>
        <div>
          <p>Shipping Fee :</p>
          <p>
            <FormatPrice price={shippingfee} />
          </p>
        </div>
        <hr />
        <div>
          <p>Total Price :</p>
          <p>
            <FormatPrice price={shippingfee + total_price} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartBill;
