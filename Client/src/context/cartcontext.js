import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import cartReducer from "../Reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initalState = {
    // cart: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    total_item: 0,
    total_price: 0,
    shippingfee: 5000,
  };
  const [state, dispatchCart] = useReducer(cartReducer, initalState);

  const addToCart = (amount, curColor, product) => {
    dispatchCart({
      type: "ADD_TO_CART",
      payload: { amount, curColor, product },
    });
  };
  const increaseToCart = useCallback(
    (id) => {
      dispatchCart({ type: "INCREASE_ITEM", payload: id });
    },
    [dispatchCart]
  );
  const decreaseToCart = (id) => {
    dispatchCart({ type: "DECREASE_ITEM", payload: id });
  };
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };
  //   to add in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatchCart({ type: "TOTAL_ITEMS" });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        decreaseToCart,
        increaseToCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
