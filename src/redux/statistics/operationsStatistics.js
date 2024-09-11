import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";

const token = localStorage.getItem("token");

const errorNotify = (error) =>
  error.response.data.message ??
  `Operation failed and transaction not saved. We are facing some technical problems with our servers ! `;

// Set the base URL for axios
axios.defaults.baseURL = "https://wallet.b.goit.study/";

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getTransactions = createAsyncThunk(
  "statistics/getAllTransactions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/transactions");
      // console.log(response.data);

      toast.success("Transaction added successfully !");

      return response.data;
    } catch (error) {
      toast(errorNotify);

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
