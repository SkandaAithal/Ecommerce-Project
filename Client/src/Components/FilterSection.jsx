import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck, FaAngleDown, FaAngleUp } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button";
import Loader from "./Loader";
import { useProductContext } from "../context/productcontext";
export default function FilterSection() {
  const {
    maxPrice,
    minPrice,
    uniqueCategories,
    uniqueCompanies,
    uniqueColors,
    text,
    category,
    color,
    price,
    updateFilterValue,
    clearFilters,
  } = useProductContext();
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreColors, setShowMoreColors] = useState(false);
  const lessCategories = uniqueCategories.slice(0, 4);
  const lessColors = uniqueColors.slice(0, 5);

  return (
    <Wrapper>
      <div className="filter-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search "
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>

        {uniqueCategories.length ? (
          <div>
            {showMoreCategories
              ? ["all", ...uniqueCategories].map((curElem, index) => {
                  return (
                    <button
                      key={index}
                      name="category"
                      value={curElem}
                      className={curElem === category ? "active" : ""}
                      onClick={updateFilterValue}
                    >
                      {curElem}
                    </button>
                  );
                })
              : ["all", ...lessCategories].map((curElem, index) => {
                  return (
                    <button
                      key={index}
                      name="category"
                      value={curElem}
                      className={curElem === category ? "active" : ""}
                      onClick={updateFilterValue}
                    >
                      {curElem}
                    </button>
                  );
                })}

            {showMoreCategories ? (
              <FaAngleUp
                className="arrow-icon"
                onClick={() => {
                  setShowMoreCategories(false);
                }}
              />
            ) : (
              <FaAngleDown
                className="arrow-icon"
                onClick={() => {
                  setShowMoreCategories(true);
                }}
              />
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        {uniqueCompanies.length ? (
          <form>
            <select
              name="company"
              className="filter-company--select"
              onClick={updateFilterValue}
            >
              {["all", ...uniqueCompanies].map((curElem, index) => {
                return (
                  <option key={index} value={curElem}>
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        ) : (
          <Loader />
        )}
      </div>

      <div className=".filter-color-style ">
        <h3>Colors</h3>
        {uniqueColors.length ? (
          <div className="filter-color-style">
            <button
              className="color-all--style "
              name="color"
              value="all"
              onClick={updateFilterValue}
            >
              all
            </button>

            {showMoreColors
              ? uniqueColors.map((curColor, index) => {
                  return (
                    <button
                      key={index}
                      name="color"
                      value={curColor}
                      style={{ backgroundColor: curColor }}
                      className={
                        curColor === color ? "active btnStyle" : "btnStyle"
                      }
                      onClick={updateFilterValue}
                    >
                      {curColor === color ? (
                        <FaCheck className="checkStyle" />
                      ) : null}
                    </button>
                  );
                })
              : lessColors.map((curColor, index) => {
                  return (
                    <button
                      key={index}
                      name="color"
                      value={curColor}
                      style={{ backgroundColor: curColor }}
                      className={
                        curColor === color ? "active btnStyle" : "btnStyle"
                      }
                      onClick={updateFilterValue}
                    >
                      {curColor === color ? (
                        <FaCheck className="checkStyle" />
                      ) : null}
                    </button>
                  );
                })}

            {showMoreColors ? (
              <FaAngleUp
                className="arrow-icon"
                onClick={() => {
                  setShowMoreColors(false);
                }}
              />
            ) : (
              <FaAngleDown
                className="arrow-icon"
                onClick={() => {
                  setShowMoreColors(true);
                }}
              />
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        {price && (
          <p>
            <FormatPrice price={price} number={100} />
          </p>
        )}
        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          step={1}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filter
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .arrow-icon {
    font-size: 2rem;
    color: red;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      /* width: 80%; */
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    color: black;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    box-shadow: 0px 0px 5px 2px #dad9db;
    border-radius: 50%;

    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #f05b4a;
    color: #ffffff;
  }
`;
