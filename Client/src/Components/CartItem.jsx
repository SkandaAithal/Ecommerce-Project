import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmount from "./CartAmount";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useCartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";
import LazyImage from "../helpers/LazyImage";
import styled from "styled-components";

function CartItem({ id, amount, color, image, name, price, blurhash }) {
  let { increaseToCart, decreaseToCart, removeItem } = useCartContext();

  let navId = id.split("#")[0];
  return (
    <Wrapper>
      <div className="cart-heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <LazyImage className="img" src={image} blurhash={blurhash} />
            </figure>
          </div>

          <div>
            <Link to={`/singleproduct/${navId}`}>
              <p>{name}</p>
            </Link>
            <div className="color-div">
              <p>Color :</p>
              <div
                className="color-style"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
        </div>

        <div className="cart-hide">
          <p>
            <FormatPrice price={price} number={10} />
          </p>
        </div>

        <div>
          <CartAmount
            amount={amount}
            increase={() => {
              increaseToCart(id);
            }}
            decrease={() => {
              decreaseToCart(id);
            }}
          />
        </div>

        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} number={10} />
          </p>
        </div>

        <div>
          <BsFillTrash3Fill
            className="remove_icon"
            onClick={() => {
              removeItem(id);
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.div`
  .img {
    width: 100%;
    height: 100%;
  }
`;
