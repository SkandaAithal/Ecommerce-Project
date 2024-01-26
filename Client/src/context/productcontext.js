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
  const API_URL = `https://ecommerce-server.uk.to/products/allproducts?page=${
    state.page
  }&text=${state.text}&category=${state.category}&color=${
    state.color
  }&price=${state.price.toString()}&sort=${state.sort}&company=${
    state.company
  }`;
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

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

  const updateFilterValue = ({ target: { value, name } }) => {
    if (state.isLoading) return;

    dispatch({
      type: "UPDATE_FILTER_VALUE",
      payload: { value, name },
    });
  };
  useEffect(() => {
    getProducts(abortController);

    return () => {
      abortController.abort();
    };
  }, [state.trigger]);

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
        updateFilterValue,
        clearFilters,
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
