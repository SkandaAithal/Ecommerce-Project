import React, { useEffect } from "react";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../styles/Button";
import { useProductContext } from "../context/productcontext";
import Loader from "./Loader";
import LazyImage from "../helpers/LazyImage";
import { useUserContext } from "../context/userscontext";
import InfiniteScroll from "react-infinite-scroll-component";
export default function ListView({ products = [], loadMoreItems, totalItems }) {
  const { isLoading, setNav } = useProductContext();
  let location = useLocation();
  const { dispatchUser } = useUserContext();
  location = location.pathname;
  useEffect(() => {
    setNav(location);
  }, [location]);
  return (
    <Wrapper className="section">
      {isLoading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={loadMoreItems}
          hasMore={products.length < totalItems}
          loader={<Loader />}
          endMessage={
            <p
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                margin: "2rem",
                color: "#3d3d3d",
              }}
            >
              <b>That's all for now! Thanks for exploring.</b>
            </p>
          }
          scrollThreshold={0.5}
        >
          <div className="container grid">
            {products.map(
              ({ _id, name, image, price, description, blurHash }) => {
                return (
                  <div className="card grid grid-two-column" key={_id}>
                    <figure className="card">
                      <LazyImage src={image} blurhash={blurHash} />
                    </figure>

                    <div className="card-data">
                      <h3>{name}</h3>
                      <p>
                        <FormatPrice price={price} />
                      </p>
                      <p>{description.slice(0, 75)}...</p>
                      <Link
                        to={`/singleproduct/${_id}`}
                        className="btn-main"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Button className="btn">Read more</Button>
                      </Link>

                      {location === "/sellerproducts" && (
                        <Button
                          onClick={() => {
                            dispatchUser({
                              type: "OPEN_CONFIRM",
                              payload: { id: _id, name: name },
                            });
                          }}
                          style={{
                            backgroundColor: "red",
                            marginBottom: "2rem",
                          }}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </InfiniteScroll>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .grid {
    gap: 3.2rem;
  }
  .container {
    padding: 2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      height: 40rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      padding: 0;
    }
  }
`;
