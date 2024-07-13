import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import todosReducer from "./TodoSlice";
import counterReducer from "./CounterSlice";
import userReducer from "./userSlice";
import zodosReducer from "./zodoSlice"
import kounderReducer from "./kounderSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos: todosReducer,
    counter: counterReducer,
    users:userReducer,
    zodos:zodosReducer,
    kounder:kounderReducer,
  
  },
});
