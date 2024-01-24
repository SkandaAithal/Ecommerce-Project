const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_FETCH":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...state.products, ...action.payload.products],
        featureProducts: action.payload.featureProducts,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
        maxPrice: action.payload.priceRange.max,
        minPrice: action.payload.priceRange.min,
        uniqueCompanies: action.payload.uniqueValues.companies,
        uniqueCategories: action.payload.uniqueValues.categories,
        uniqueColors: action.payload.uniqueValues.colors,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1,
        trigger: !state.trigger,
      };

    case "REFRESH":
      return {
        ...state,
        products: [],
        page: 1,
        trigger: !state.trigger,
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

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        page: 1,
        products: [],
        [name]: value,
        trigger: !state.trigger,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        text: "",
        products: [],
        page: 1,
        trigger: !state.trigger,
        company: "all",
        category: "all",
        color: "all",
        price: "",
        sort: "",
      };
    default:
      return state;
  }
};
export default ProductReducer;
