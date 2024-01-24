import styled from "styled-components";

import React, { lazy } from "react";
import { useCartContext } from "../context/cartcontext";

import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
import RenderOnViewportEntry from "../helpers/RenderOnViewportEntry";
const CartBill = lazy(() => import("../Components/CartBill"));
const CartItem = lazy(() => import("../Components/CartItem"));
function Cart() {
  let { cart, clearCart, total_price, shippingfee } = useCartContext();
  let navigate = useNavigate();

  return (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-five-column ">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.length ? (
            cart.map((curElem) => {
              return (
                <RenderOnViewportEntry key={curElem.id} threshold={0}>
                  <CartItem {...curElem} />
                </RenderOnViewportEntry>
              );
            })
          ) : (
            <h2>No Items in the CART.</h2>
          )}

          <div className="cart-two-button">
            <Button
              className="btn"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/products");
              }}
            >
              Continue shopping
            </Button>

            {cart.length ? (
              <Button onClick={clearCart} className="btn-clear">
                Clear cart
              </Button>
            ) : null}
          </div>
        </div>

        {total_price ? (
          <RenderOnViewportEntry threshold={0} style={{ minHeight: "240px" }}>
            <CartBill total_price={total_price} shippingfee={shippingfee} />
          </RenderOnViewportEntry>
        ) : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      color: transparent;
      border-radius: 5px;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .btn {
    width: fit-content;
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
      color: #fff;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
