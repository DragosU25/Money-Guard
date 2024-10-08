// src/redux/transactions/operationsTransactions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://wallet.b.goit.study/";

export const fetchTransactionCategories = createAsyncThunk(
  "transactions/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/transaction-categories");
      // console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/transactions");
      // console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData, thunkAPI) => {
    try {
      const response = await axios.post("/api/transactions", transactionData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",

  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`/api/transactions/${transactionId}`);

      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ transactionId, transactionData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${transactionId}`,
        transactionData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionsSummary = createAsyncThunk(
  "transactions/fetchTransactionsSummary",
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/transactions-summary?month=${month}&year=${year}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
