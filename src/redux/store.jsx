import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import todosReducer from "./../Components/Todo/TodoSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todosReducer,
  },
});
