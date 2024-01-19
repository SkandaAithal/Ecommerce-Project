import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

function Header({ userRole, isLoggedIn }) {
  return (
    <>
      <MainHeader>
        <Link to="/">
          <h3 className="logo">Ecommerce</h3>
        </Link>
        <Nav userRole={userRole} isLoggedin={isLoggedIn} />
      </MainHeader>
    </>
  );
}
const MainHeader = styled.header`
  padding: 0 4rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-weight: bold;
    font-size: 4rem;

    &:hover {
      color: #6611ace1;
    }
  }
`;

export default Header;
