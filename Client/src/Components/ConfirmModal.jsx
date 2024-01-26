import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useUserContext } from "../context/userscontext";
import axios from "axios";
import { useProductContext } from "../context/productcontext";
import { useSellerContext } from "../context/sellercontext";

function ConfirmModal({ id, name }) {
  const { dispatchSeller } = useSellerContext();
  const { dispatch } = useProductContext();
  const removeProduct = async () => {
    try {
      await axios.delete(
        `https://ecommerce-server.uk.to/products/removeproduct?pid=${id}`
      );

      dispatchSeller({ type: "DELETE_PRODUCT", payload: id });
      dispatch({ type: "REFRESH" });
    } catch (err) {}
  };
  const { dispatchUser } = useUserContext();
  return ReactDOM.createPortal(
    <Overlay>
      <Modal>
        <Message>
          {`Are you sure you want to delete `}
          <BoldText>{name}</BoldText>?
        </Message>
        <ButtonWrapper>
          <Button
            onClick={() => {
              removeProduct();

              dispatchUser({ type: "CLOSE_CONFIRM" });
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              dispatchUser({ type: "CLOSE_CONFIRM" });
            }}
          >
            No
          </Button>
        </ButtonWrapper>
      </Modal>
    </Overlay>,
    document.getElementById("confirm-modal")
  );
}

export default ConfirmModal;
const BoldText = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 22px;
`;
const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  margin-inline: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Message = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  width: 48%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #a50000;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: #ca0101;
  }
`;
