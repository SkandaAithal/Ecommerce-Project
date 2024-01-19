import React from "react";
import Product from "./Product";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

export default function GridViewList({
  products = [],
  loadMoreItems,
  totalItems,
}) {
  return (
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
      <Wrapper className="grid grid-three-column ">
        {products.map((item) => {
          return <Product key={item._id} {...item} />;
        })}
      </Wrapper>
    </InfiniteScroll>
  );
}
const Wrapper = styled.section`
  /* padding: 5rem 0; */
  .item1 {
    grid-column: 1 / span 3;
  }

  figure {
    width: auto;
    display: flex;
    height: 18rem;
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

      height: 100%;
      object-fit: cover;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text1};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .close-icon {
    position: absolute;
    z-index: 1;
  }
  .card {
    background-color: #ded2f37d;
    border-radius: 1rem;
    padding-bottom: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: #2d253a;
      text-transform: capitalize;
    }

    .card-data--price {
      color: #2d253a;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

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
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure {
      height: 26rem;
    }
  }
`;
