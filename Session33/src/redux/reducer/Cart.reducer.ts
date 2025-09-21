interface cartItem {
  id: number;
  name: string;
  price: string;
  quantityInCart: number;
}

const savedCart = localStorage.getItem("cart");
const initialState: cartItem[] = savedCart ? JSON.parse(savedCart) : [];

const cartReducer = (
  state: cartItem[] = initialState,
  action: { type: string; payload?: any }
): cartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return action.payload;

    case "DELETE":
      const updated = state.filter((_, index) => index !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;

    default:
      return state;
  }
};

export default cartReducer;
