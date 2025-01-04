// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: { url: string; _id: string }[];
  color: { name: string; hex: string }[];
  discountPrice: number;
}

interface CartState {
  items: CartItem[];
  favorites: CartItem[];
}

const initialState: CartState = {
  items: [],
  favorites: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item?._id === action?.payload?._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        toast.success("This product has been added and ++");
      } else {
        state.items.push(action.payload);
        toast.success("Added to your cart successfully");
      }
    },
    addToFavorites: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state?.favorites?.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex >= 0) {
        // Item already exists, remove it
        state.favorites.splice(existingItemIndex, 1);
        toast.success("Removed from your favorites!");
      } else {
        // Add item to favorites
        state?.favorites?.push(action.payload);
        toast.success("Added to your favorites!");
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
      toast.success("Your cart has been cleared.");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, addToFavorites } =
  cartSlice.actions;

export default cartSlice.reducer;
