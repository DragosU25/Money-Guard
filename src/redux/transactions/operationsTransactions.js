import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://wallet.b.goit.study/";

export const fetchTransactionCategories = createAsyncThunk(
  "transactions/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/transaction-categories");
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

      toast.success("Transaction added successfully !");
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response.data.message ??
        `Operation failed and transaction not saved. We are facing some technical problems with our servers ! `;

      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/transactions/${transactionId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async (transaction, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${transaction.id}`,
        {
          ...transaction,
          amount: Number(transaction.amount),
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error updating transaction:",
        error.response ? error.response.data : error.message
      );
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const fetchTransactionsSummary = createAsyncThunk(
  "transactions/fetchTransactionsSummary",
  async ({ mounth, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/transactions-summary?month=${mounth}&year=${year}`
      );

      return response.data;
    } catch (error) {
      const errorNotify =
        error.response.data.message ??
        `Operation failed and transaction not saved. We are facing some technical problems with our servers ! `;
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
