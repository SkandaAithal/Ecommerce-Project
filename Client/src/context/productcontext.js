import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducerFunction from "../Reducer/productReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const abortController = new AbortController();
  const [nav, setNav] = useState("");
  const initialState = {
    isLoading: true,
    isError: false,
    page: 1,
    products: [],
    totalItems: 0,
    totalPages: 0,
    trigger: true,
    gridView: true,
    text: "",
    company: "all",
    category: "all",
    color: "all",
    price: "",
    sort: "",
    maxPrice: 0,
    minPrice: 0,
    uniqueCompanies: [],
    uniqueCategories: [],
    uniqueColors: [],
    featureProducts: [],
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const API_URL = `http://localhost:4000/products/allproducts?page=${state.page}&text=${state.text}&category=${state.category}&color=${state.color}&price=${state.price}&sort=${state.sort}`;

  async function getProducts(abortController) {
    try {
      const { data } = await axios.get(API_URL, {
        signal: abortController.signal,
      });

      dispatch({ type: "API_FETCH", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  // !. Load More products
  const loadMoreProducts = () => {
    if (!state.isLoading) {
      dispatch({ type: "INCREMENT_PAGE" });
    }
  };

  //! set grid or list view
  const setGridView = () => {
    dispatch({
      type: "SET_GRID_VIEW",
    });
  };
  const setListView = () => {
    dispatch({
      type: "SET_LIST_VIEW",
    });
  };
  useEffect(() => {
    getProducts(abortController);

    return () => {
      abortController.abort();
    };
  }, [state.trigger]);
  console.log(state);
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        setNav,
        nav,
        loadMoreProducts,
        setGridView,
        setListView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks for the above context
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useProductContext };
