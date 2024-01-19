import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducerFunction from "../Reducer/filterReducer";
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
const FilterContext = createContext();
const FilterContextProvider = ({ children }) => {
  let { products } = useProductContext();
  const [state, dispatchFilter] = useReducer(reducerFunction, initialState);

  const setGridView = () => {
    dispatchFilter({
      type: "SET_GRID_VIEW",
    });
  };
  const setListView = () => {
    dispatchFilter({
      type: "SET_LIST_VIEW",
    });
  };

  const sorting = ({ target: { value } }) => {
    dispatchFilter({ type: "SORTING", payload: value });
  };

  const updateFilterValue = ({ target: { value, name } }) => {
    return dispatchFilter({
      type: "UPDATE_FILTER_VALUE",
      payload: { value, name },
    });
  };
  const clearFilters = () => {
    dispatchFilter({ type: "CLEAR_FILTERS" });
  };
  // useEffect(() => {
  //   dispatchFilter({ type: "FILTER_PRODUCTS_SEARCH" });

  //   dispatchFilter({
  //     type: "SORTING_PRODUCTS",
  //   });
  // }, [products, state.sortingValue, state.filters]);
  // useEffect(() => {
  //   dispatchFilter({
  //     type: "FILTER_PRODUCTS",
  //     payload: products,
  //   });
  // }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

let useFilterProducts = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, useFilterProducts };
