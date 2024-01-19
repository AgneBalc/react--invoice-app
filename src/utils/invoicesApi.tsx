import { createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "./types";
import axios from "axios";

const API_URL: string = "https://invoices-api-bw33.onrender.com/invoices";

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

export const setToPaid = createAsyncThunk(
  "invoices/setToPaid",
  async (id: string) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, {
        status: "paid",
      });
      return response.data;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);
