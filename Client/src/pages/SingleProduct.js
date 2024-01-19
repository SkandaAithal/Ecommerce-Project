import { lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Components/Loader";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../Components/PageNavigation";
import { Container } from "../styles/Container";
import ProductImages from "../Components/ProductImages";
import FormatPrice from "../helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Stars from "../Components/Stars";
import RenderOnViewportEntry from "../helpers/RenderOnViewportEntry";
import axios from "axios";
import { useUserContext } from "../context/userscontext";
const AddToProduct = lazy(() => import("../Components/AddToProduct"));
const SingleProduct = () => {
  let { id } = useParams();
  const { dispatchUser } = useUserContext();
  let { nav } = useProductContext();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const GET_PRODUCT_URL = `http://localhost:4000/products/singleproduct?pid=${id}`;

  useEffect(() => {
    const abortController = new AbortController();

    const getSingleProduct = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(GET_PRODUCT_URL, {
          signal: abortController.signal,
        });

        setSingleProduct(data.singleproduct[0]);
      } catch (err) {
        console.log(err);
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: err.response.data.message,
            color: "red",
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    getSingleProduct();

    return () => {
      abortController.abort();
    };
  }, []);
  const { name, company, price, description, stock, stars, reviews, images } =
    singleProduct;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <PageNavigation title={name} nav={nav} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <ProductImages image={images} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <Stars stars={stars} />
            <p>({reviews} customer reviews)</p>
            <p className="product-data-price">
              MRP : &nbsp;
              <del className="product-data-real-price">
                <FormatPrice price={price + 3000} />
              </del>
            </p>

            <p className="product-data-real-price product-data-price">
              Deal of the Day : &nbsp;
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>

            <div className="product-data-warranty ">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>On time Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdOutlineSecurity className="warranty-icon" />
                <p>Secure Payments</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available :
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Brand : <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && (
              <RenderOnViewportEntry
                threshold={0}
                style={{ minHeight: "240px" }}
              >
                <AddToProduct product={singleProduct} nav={nav} id={id} />
              </RenderOnViewportEntry>
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 3rem 2rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    h2 {
      text-transform: capitalize;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      font-size: 1.8rem;

      span {
        font-weight: bold;
        color: #000;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0;
  }
`;

export default SingleProduct;
