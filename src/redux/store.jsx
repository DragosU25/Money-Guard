import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { transactionsReducer } from "./transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    transactions: transactionsReducer,
  },
});
