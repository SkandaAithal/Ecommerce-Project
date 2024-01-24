import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import styled from "styled-components";
import { useProductContext } from "../context/productcontext";

export default function Sort({
  setGridView,
  setListView,
  gridView,
  totalItems,
}) {
  const { updateFilterValue } = useProductContext();
  return (
    <Wrapper>
      <div className="sorting-list--grid">
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
      <div className="product-data">
        <p>{totalItems} total Products</p>
      </div>
      <div className="sort-selection">
        <form>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={updateFilterValue}
          >
            <option value="lowest">Price (lowest)</option>

            <option value="highest">Price (highest)</option>

            <option value="a-z">Price (a-z)</option>

            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-block: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

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

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
