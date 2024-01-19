import React from "react";
import styled from "styled-components";

const ProductForm = ({ dispatchAddProduct, state, updation }) => {
  const stringInputValue = ({ target: { name, value } }) => {
    dispatchAddProduct({
      type: "GET_INPUT_DATA",
      payload: { name, value: value },
    });
  };
  const numberInputValue = (name, value) => {
    if (value !== "") {
      dispatchAddProduct({
        type: "GET_INPUT_DATA",
        payload: { name, value: parseInt(value) },
      });
    } else {
      dispatchAddProduct({
        type: "GET_INPUT_DATA",
        payload: { name, value },
      });
    }
  };
  const shippingCheckboxChange = (e) => {
    dispatchAddProduct({
      type: "SHIPPING_CHECKBOX",
      payload: e.target.checked,
    });
  };
  const featuredCheckboxChange = (e) => {
    dispatchAddProduct({
      type: "FEATURED_CHECKBOX",
      payload: e.target.checked,
    });
  };

  return (
    <Container>
      <Wrapper>
        <label>Product Name: </label>
        {updation ? (
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter product name"
          />
        ) : (
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={stringInputValue}
            placeholder="Enter product name"
          />
        )}
      </Wrapper>
      <Wrapper>
        <label>Company: </label>
        <input
          type="text"
          name="company"
          value={state.company}
          onChange={stringInputValue}
          placeholder="Enter company name"
        />
      </Wrapper>
      <Wrapper>
        <label>Product Description: </label>
        <textarea
          id="address"
          name="description"
          value={state.description}
          onChange={stringInputValue}
          rows="7"
          placeholder="Enter your product description"
        />
      </Wrapper>

      <Wrapper>
        <label>Category: </label>
        <input
          type="text"
          name="category"
          value={state.category}
          onChange={stringInputValue}
          placeholder="Enter product category"
        />
      </Wrapper>
      <Wrapper>
        <label>Price in INR: </label>
        <input
          type="text"
          name="price"
          value={state.price}
          pattern="[0-9]*"
          onChange={({ target: { name, value } }) => {
            numberInputValue(name, value.replace(/[^0-9]/g, ""));
          }}
          placeholder="Enter product price"
        />
      </Wrapper>

      <Wrapper>
        <label>Stock: </label>
        <input
          type="text"
          name="stock"
          value={state.stock}
          pattern="[0-9]*"
          onChange={({ target: { name, value } }) => {
            numberInputValue(name, value.replace(/[^0-9]/g, ""));
          }}
          placeholder="Enter product stock"
        />
      </Wrapper>
      <Wrapper>
        <label>Reviews: </label>
        <input
          type="text"
          name="reviews"
          value={state.reviews}
          pattern="[0-9]*"
          onChange={({ target: { name, value } }) => {
            numberInputValue(name, value.replace(/[^0-9]/g, ""));
          }}
          placeholder="Enter product reviews"
        />
      </Wrapper>
      <Wrapper className="checkbox">
        <label
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Featured Products:
          <input
            type="checkbox"
            name="featured"
            checked={state.featured}
            onChange={featuredCheckboxChange}
            style={{ display: "none" }}
          />
          <span
            style={{
              position: "relative",
              display: "inline-block",
              width: "20px",
              height: "20px",
              padding: "3px",
              border: "2px solid #4CAF50",
              borderRadius: "4px",
              marginLeft: "10px",
              backgroundColor: state.featured ? "#4CAF50" : "transparent",
            }}
          ></span>
        </label>
      </Wrapper>
      <Wrapper className="checkbox">
        <label
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Shipping:
          <input
            type="checkbox"
            name="shipping"
            checked={state.shipping}
            onChange={shippingCheckboxChange}
            style={{ display: "none" }}
          />
          <span
            style={{
              position: "relative",
              display: "inline-block",
              width: "20px",
              height: "20px",
              padding: "3px",
              border: "2px solid #4CAF50",
              borderRadius: "4px",
              marginLeft: "10px",
              backgroundColor: state.shipping ? "#4CAF50" : "transparent",
            }}
          ></span>
        </label>
      </Wrapper>
    </Container>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  textarea {
    resize: none;
  }
  input,
  textarea {
    min-width: 35dvw;
    border: 1px solid black !important;
  }
`;
const Container = styled.div`
  width: max-content;
  margin: auto;
  display: grid;
  gap: 2rem;
`;
export default ProductForm;
