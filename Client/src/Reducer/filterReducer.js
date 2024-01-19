const reducerFunction = (state, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      let priceArray = action.payload.map((ele) => ele.price);

      // Math.max(...priceArray)
      // Math.max.apply(null,priceArray)
      let maxprice = priceArray.reduce((a, b) => Math.max(a, b), 0);

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxprice, price: maxprice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };
    case "SORTING":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let { filterProducts, sortingValue } = state;
      let tempProductsArray = [...filterProducts];

      let sortingProducts = (a, b) => {
        if (sortingValue === "a-z") return a.name.localeCompare(b.name);

        if (sortingValue === "z-a") return b.name.localeCompare(a.name);

        if (sortingValue === "highest") return b.price - a.price;

        if (sortingValue === "lowest") return a.price - b.price;
      };

      newSortData = tempProductsArray.sort(sortingProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      let { name, value } = action.payload;
      let { filters } = state;
      return {
        ...state,
        filters: {
          ...filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS_SEARCH":
      let { allProducts } = state;
      let { text, category, company, color, price } = state.filters;
      let tempFilterArray = [...allProducts];

      if (text) {
        tempFilterArray = tempFilterArray.filter((curElem) =>
          curElem.name.toLowerCase().includes(text)
        );
      }

      if (category !== "all") {
        tempFilterArray = tempFilterArray.filter(
          (curElem) => curElem.category === category
        );
      }
      if (company !== "all") {
        tempFilterArray = tempFilterArray.filter(
          (curElem) => curElem.company === company
        );
      }

      if (color !== "all") {
        tempFilterArray = tempFilterArray.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterArray = tempFilterArray.filter((ele) => ele.price === price);
      } else {
        tempFilterArray = tempFilterArray.filter((ele) => ele.price <= price);
      }

      return {
        ...state,
        filterProducts: tempFilterArray,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };
    default:
      return state;
  }
};
export default reducerFunction;
