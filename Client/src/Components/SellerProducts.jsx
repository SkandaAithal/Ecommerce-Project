import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "../Components/ProductList";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

import Loader from "./Loader";
import { useSellerContext } from "../context/sellercontext";
import { useProductContext } from "../context/productcontext";

const SellerProducts = () => {
  const { products, isLoading, totalItems, loadMoreItems } = useSellerContext();
  const { setGridView, setListView, gridView } = useProductContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="list">
          <div className="list-btn">
            <button
              className={gridView ? "sort-btn active" : "sort-btn"}
              onClick={setGridView}
            >
              <BsFillGridFill className="icon" />
            </button>
            <button
              className={!gridView ? "sort-btn active" : "sort-btn"}
              onClick={setListView}
            >
              <FaList className="icon" />
            </button>
          </div>
          <p>{totalItems} total Products</p>
        </div>
        <div className="main-product">
          {isLoading ? (
            <Loader />
          ) : (
            <ProductList
              gridView={gridView}
              filterProducts={products}
              totalItems={totalItems}
              loadMoreItems={loadMoreItems}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 2rem;
    .list {
      display: flex;
      justify-content: space-between;
      margin-block: 5rem;
    }
    .list-btn {
      display: flex;
      gap: 2rem;
    }
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      padding: 2rem;
    }
  }
`;

export default SellerProducts;
