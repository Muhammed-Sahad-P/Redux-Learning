import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import todosReducer from "./TodoSlice";
import counterReducer from "./CounterSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todosReducer,
    counter: counterReducer,
    users:userReducer,
  
  },
});
