import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "./operationsStatistics";

const initialState = {
  isLoading: false,
  error: null,
  transactions: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.transactions = [];
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.transactions = [];
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getTransactions.rejected, handleRejected);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
