import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

function HeroSection({ heading }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{heading}</h1>
            <p>
              Welcome to UrbanPulse, your go-to destination for curated urban
              lifestyle essentials. Immerse yourself in a world where style
              meets functionality, as we bring you a handpicked collection of
              products that resonate with the vibrancy and energy of city
              living.
            </p>

            <Link to="/products">
              <Button>show now</Button>
            </Link>
          </div>

          {/* image section */}
          <div className="hero-section-image">
            <figure className="img-style">
              <img src="images/hero.jpg" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 8rem 5rem;

  img {
    min-width: 15rem;
    min-height: 15rem;
    max-width: 100%;
    height: 100%;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 8rem 0;
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
