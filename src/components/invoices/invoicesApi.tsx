import { createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "../../types";
import axios from "axios";

const API_URL: string = "http://localhost:8080/invoices";

export const getInvoices = createAsyncThunk(
  "invoices/getInvoices",
  async () => {
    try {
      const response = await axios.get(API_URL);
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
      const response = await axios.post(API_URL, invoice);
      return response.data;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

export const editInvoice = createAsyncThunk(
  "invoices/editInvoice",
  async (invoice: Invoice) => {
    try {
      const response = await axios.put(`${API_URL}/${invoice.id}`, invoice);
      return response.data;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

export const deleteInvoice = async (id: string) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
