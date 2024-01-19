import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cartcontext";
import { Button } from "../styles/Button";
import { useUserContext } from "../context/userscontext";

function Nav({ userRole, isLoggedin }) {
  let { total_item } = useCartContext();

  const [menuIcon, setMenuIcon] = useState(false);
  const { dispatchUser } = useUserContext();

  const Nav = styled.nav`
    .nav-lists {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .navbar-link {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 600;

      a {
        transition: all 0.3s;
        padding: 1rem;
        display: grid;
        text-align: center;
        place-content: center;
        border-radius: 1rem;
        color: #260541c1;
        &:hover {
          color: #481b6dc1;
          background-color: #edb3f5;
        }
      }
    }

    .navbar-cart {
      position: relative;

      .cart {
        position: relative;
        font-size: 2rem;
        color: #481b6dc1;
      }
      .cart-number {
        background-color: ${({ theme }) => theme.colors.cart};
        padding: 0.3rem 0.5rem;
        border-radius: 50%;
        font-size: 12px;
        position: absolute;
        top: -40%;
        left: 70%;
        color: white;
      }

      a:active {
        color: #481b6dc1;
      }
    }

    .mobile-navbar-btn {
      display: none;
      font-size: 4rem;
    }
    .close {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 99;
      }
      .active .mobile-btn {
        display: none;
        position: absolute;
        top: 30%;
        right: 7%;
        z-index: 99;
      }

      .active .close {
        display: inline-block;
      }

      .nav-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        inset: 0;
        gap: 4rem;
        background-color: white;
        flex-direction: column;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
      }

      .active .nav-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 99;

        .navbar-link {
          font-size: 4rem;
        }
      }
      .navbar-cart {
        scale: 1.75;
        transform: translateY(0.5rem);
      }
    }
  `;
  return (
    <Nav>
      <div className={menuIcon ? "active" : ""}>
        <ul className="nav-lists">
          <li className="navbar-link">
            <Link
              onClick={() => {
                setMenuIcon(false);
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link
              onClick={() => {
                setMenuIcon(false);
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="navbar-link">
            <Link
              onClick={() => {
                setMenuIcon(false);
              }}
              to="/products"
            >
              Products
            </Link>
          </li>

          {userRole === "customer" ? (
            <li className="navbar-cart">
              {isLoggedin ? (
                <Link
                  onClick={() => {
                    setMenuIcon(false);
                  }}
                  to="/cart"
                >
                  <FiShoppingCart className="cart" />
                  {total_item ? (
                    <span className="cart-number">{total_item}</span>
                  ) : null}
                </Link>
              ) : (
                <div
                  onClick={() => {
                    dispatchUser({
                      type: "SHOW_NOTIFICATION",
                      payload: {
                        message: "You must Login to Continue Shopping!",
                        color: "red",
                      },
                    });
                    setMenuIcon(false);
                    dispatchUser({ type: "OPEN_LOGIN" });
                  }}
                >
                  <FiShoppingCart className="cart" />
                </div>
              )}
            </li>
          ) : (
            <>
              <li className="navbar-link">
                <Link
                  onClick={() => {
                    setMenuIcon(false);
                  }}
                  to="/sellerproducts"
                >
                  Your products
                </Link>
              </li>
              <li className="navbar-link">
                <Link
                  onClick={() => {
                    setMenuIcon(false);
                  }}
                  to="/addproduct"
                >
                  Add product
                </Link>
              </li>
            </>
          )}
          <li className="navbar-link">
            <Link
              onClick={() => {
                setMenuIcon(false);
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            {isLoggedin ? (
              <Button
                onClick={() => {
                  localStorage.removeItem("userToken");
                  localStorage.removeItem("role");
                  setMenuIcon(false);
                  dispatchUser({
                    type: "LOGOUT",
                    payload: {
                      message: "Your account is Logged out",
                    },
                  });
                }}
              >
                Log out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setMenuIcon(false);
                  dispatchUser({ type: "OPEN_LOGIN" });
                }}
              >
                Login
              </Button>
            )}
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenuRightAlt
            name="menu-outline"
            className="mobile-btn menu-icon"
            onClick={() => {
              setMenuIcon(!menuIcon);
            }}
          />
          <CgClose
            name="close-outline"
            className="mobile-btn close "
            onClick={() => {
              setMenuIcon(!menuIcon);
            }}
          />
        </div>
      </div>
    </Nav>
  );
}

export default Nav;
