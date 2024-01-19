import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PageNavigation({ title, nav }) {
  return (
    <Wrapper>
      <Link
        to={
          nav === "/"
            ? "/"
            : nav === "/products"
            ? "/products"
            : "/sellerproducts"
        }
      >
        {nav === "/"
          ? "Home"
          : nav === "/products"
          ? "Products"
          : "Your Products"}
      </Link>
      <span>/</span>
      {title}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.5rem;
  padding-left: 3rem;

  a,
  span {
    color: ${({ theme }) => theme.colors.cart};
    text-decoration: none;
    font-size: 3.2rem;
  }
`;
