const reducerFunction = (state, action) => {
  switch (action.type) {
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "API_FETCH":
      return {
        ...state,
        products: [...state.products, ...action.payload.products],

        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
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

    case "DELETE_PRODUCT":
      const filteredProducts = state.products.filter(
        (product) => product._id !== action.payload
      );
      return {
        ...state,
        products: filteredProducts,
      };
  }
};
export default reducerFunction;
