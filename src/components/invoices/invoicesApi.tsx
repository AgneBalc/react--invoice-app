import { createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "../../types";
import axios from "axios";

const API_URL: string = "https://react-http-35b06-default-rtdb.firebaseio.com/";

export const fetchAllInvoices = createAsyncThunk(
  "invoices/fetchAllInvoices",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<Invoice[]>(`${API_URL}.json`);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const fetchInvoice = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const resData = await response.json();
  return resData;
};

export const postInvoice = async (invoice: Invoice) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  });
};

export const patchInvoice = async (invoice: Invoice) => {
  await fetch(`${API_URL}/${invoice.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  });
};

export const deleteInvoice = async (id: string) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
