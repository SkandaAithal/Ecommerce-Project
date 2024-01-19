const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return {
        ...state,
        colors: [...state.colors, action.payload],
      };

    case "REMOVE_COLOR":
      const filteredColors = state.colors.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        colors: filteredColors,
      };

    case "STARS_RANGE":
      return {
        ...state,
        stars: action.payload,
      };

    case "GET_INPUT_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "SHIPPING_CHECKBOX":
      return {
        ...state,

        shipping: action.payload,
      };

    case "FEATURED_CHECKBOX":
      return {
        ...state,

        featured: action.payload,
      };
    case "DATA_FROM_SERVER":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
export default reducerFunction;
