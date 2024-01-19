import { createContext, useContext, useEffect, useReducer } from "react";
import reducerFunction from "../Reducer/sellerReducer";
import { decrypt } from "../helpers/encryptdecrypt";
import axios from "axios";
const SellerContext = createContext();
const SellerProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    page: 1,
    products: [],
    totalItems: 0,
    totalPages: 0,
    trigger: true,
  };
  const abortController = new AbortController();
  const encryptToken = localStorage.getItem("userToken");
  const [state, dispatchSeller] = useReducer(reducerFunction, initialState);
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const SELLER_PRODUCT_URL = `http://localhost:4000/products/getallproducts?page=${state.page}`;

  async function getSellerProducts(abortController) {
    try {
      if (encryptToken) {
        const token = decrypt(encryptToken, secretKey);
        const { data } = await axios.get(SELLER_PRODUCT_URL, {
          signal: abortController.signal,
          headers: {
            authorization: token,
          },
        });

        dispatchSeller({ type: "API_FETCH", payload: data });
      }
    } catch (err) {
    } finally {
      dispatchSeller({ type: "STOP_LOADING" });
    }
  }

  // Load more items when the last item is rendered
  const loadMoreItems = () => {
    if (!state.isLoading) {
      dispatchSeller({ type: "INCREMENT_PAGE" });
    }
  };

  useEffect(() => {
    getSellerProducts(abortController);

    return () => {
      abortController.abort();
    };
  }, [state.trigger]);
  return (
    <SellerContext.Provider value={{ ...state, dispatchSeller, loadMoreItems }}>
      {children}
    </SellerContext.Provider>
  );
};
const useSellerContext = () => {
  return useContext(SellerContext);
};
export { SellerProvider, useSellerContext };
