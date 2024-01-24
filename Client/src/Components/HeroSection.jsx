import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Blurhash } from "react-blurhash";

function HeroSection({ heading }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "images/hero.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

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

          <div className="hero-section-image">
            {imageLoaded ? null : (
              <div className="placeholder">
                <Blurhash
                  height={"100%"}
                  width={"100%"}
                  hash="LAF=da5S4nR30zofo~9F00Z$~VSi"
                />
              </div>
            )}

            <figure className={`img-style ${imageLoaded ? "loaded" : ""}`}>
              <img
                src="images/hero.jpg"
                alt="Hero Image"
                style={{ display: imageLoaded ? "block" : "none" }}
              />
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
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    height: auto;

    .placeholder {
      width: 100%;
      min-height: 25rem;
      max-width: 100%;
      height: 100%;
    }
  }

  .img-style {
    width: 100%;
    min-height: 25rem;
    max-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 8rem 0;
    .grid {
      gap: 10rem;
    }
  }
`;

export default HeroSection;
