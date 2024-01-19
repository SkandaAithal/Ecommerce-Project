export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let { amount, curColor, product } = action.payload;
      console.log(product);
      let cartProduct;
      cartProduct = {
        id: product._id + curColor,
        name: product.name,
        color: curColor,
        amount,
        image: product.images[0].url,
        price: product.price,
        blurhash: product.images[0].blurHash,
        max: product.stock,
      };
      console.log(state.cart);
      if (state.cart.find((prod) => prod.id === cartProduct.id)) {
        let updatedCart = state.cart.map((product) => {
          if (product.id === cartProduct.id && product.amount < product.max) {
            product.amount = product.amount + 1;
          }
          return product;
        });
        console.log(updatedCart);
        return {
          ...state,
          cart: [...updatedCart],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "INCREASE_ITEM":
      let increaseCartItem = state.cart.find(
        (product) => product.id === action.payload
      );

      let updatedCartAmountIncrease = state.cart.map((product) => {
        if (
          product.id === increaseCartItem.id &&
          product.amount < product.max
        ) {
          product.amount = product.amount + 1;
        }
        return product;
      });
      console.log(updatedCartAmountIncrease);
      return {
        ...state,
        cart: [...updatedCartAmountIncrease],
      };

    case "DECREASE_ITEM":
      let decreaseCartitem = state.cart.find(
        (product) => product.id === action.payload
      );
      let updatedCartAmountDecrease = state.cart.map((product) => {
        if (product.id === decreaseCartitem.id && product.amount > 1) {
          product.amount = product.amount - 1;
        }
        return product;
      });
      return {
        ...state,
        cart: [...updatedCartAmountDecrease],
      };

    case "REMOVE_ITEM":
      let removeCartitem = state.cart.filter(
        (curelem) => curelem.id !== action.payload
      );

      return {
        ...state,
        cart: [...removeCartitem],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "TOTAL_ITEMS":
      const subTotal = state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      );
      return {
        ...state,
        total_item: state.cart.length,
        total_price: subTotal,
      };

    default:
      return state;
  }
}
