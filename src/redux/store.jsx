import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import todosReducer from "./../Components/Todo/TodoSlice";
import counterReducer from "./../Components/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todosReducer,
    counter: counterReducer,
  },
});
