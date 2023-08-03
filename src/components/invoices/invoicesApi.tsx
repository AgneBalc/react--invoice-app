import { createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "../../types";
import axios from "axios";

const API_URL: string = "https://react-http-35b06-default-rtdb.firebaseio.com/";

export const getInvoices = createAsyncThunk(
  "invoices/getInvoices",
  async () => {
    try {
      const response = await axios.get(`${API_URL}.json`);
      return response.data;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

export const createInvoice = createAsyncThunk(
  "invoices/createInvoice",
  async (invoice: Invoice) => {
    try {
      const response = await axios.post(`${API_URL}.json`, invoice);
      return response.data;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

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
