// LoadingSpinner.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  margin: 8rem 2rem;
  width: 4rem;
  height: 4rem;
  border: 2px solid rgba(255, 255, 255, 0.361);
  border-radius: 50%;
  border-top: 5px solid #ffffff;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = ({ size, color }) => (
  <SpinnerContainer size={size} color={color}></SpinnerContainer>
);

export default LoadingSpinner;
