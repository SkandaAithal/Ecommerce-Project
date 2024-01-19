import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import { useProductContext } from "../context/productcontext";
import LazyImage from "../helpers/LazyImage";
import { FaTimes } from "react-icons/fa";
import { useUserContext } from "../context/userscontext";

function Product({ _id, name, image, blurHash, price, category }) {
  let location = useLocation();
  location = location.pathname;

  const { dispatchUser } = useUserContext();
  let { setNav } = useProductContext();

  useEffect(() => {
    setNav(location);
  }, [location]);

  const closeIconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2.5rem",
    color: "#555",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="card">
        <>
          {location === "/sellerproducts" && (
            <div className="close-icon" style={closeIconStyle}>
              <FaTimes
                onClick={() => {
                  dispatchUser({
                    type: "OPEN_CONFIRM",
                    payload: { id: _id, name: name },
                  });
                }}
                style={{
                  fontSize: "2.75rem",
                  color: "#555",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
          <Link
            to={`/singleproduct/${_id}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            style={{ position: "relative" }}
          >
            <figure>
              <LazyImage src={image} blurhash={blurHash} />
              <figcaption className="caption">{category}</figcaption>
            </figure>
            <div className="card-data">
              <div className="card-data-flex">
                <h3>{name.length > 17 ? `${name.slice(0, 17)}...` : name}</h3>
                <p className="card-data--price">
                  <FormatPrice price={price} />
                </p>
              </div>
            </div>
          </Link>
        </>
      </div>
    </div>
  );
}

export default Product;
