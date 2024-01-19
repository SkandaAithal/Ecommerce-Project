import React from "react";
import { FaStar } from "react-icons/fa6";
import { HiOutlineStar } from "react-icons/hi2";
import { BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

function Stars({ stars = 0 }) {
  let starArray = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <BsStarHalf className="icon" />
        ) : (
          <HiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">{starArray}</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
  }
`;

export default Stars;
