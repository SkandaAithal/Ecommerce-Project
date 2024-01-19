import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>
            {"Oops! It seems like you've ventured into uncharted territory. "}
          </h3>
          <p>
            {
              "The page you're looking for is nowhere to be found. Click on the button to navigate back to safety."
            }
          </p>
          <Link to="/">
            {" "}
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .container {
    padding: 8rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.text1};

    h2 {
      font-size: 5rem;
      font-weight: 700;

      margin-bottom: 2rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage;
