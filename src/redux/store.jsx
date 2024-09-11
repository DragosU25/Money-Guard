import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { apiReducer } from "./currency/rateSlice";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    rateSlice: apiReducer,
  },
});
