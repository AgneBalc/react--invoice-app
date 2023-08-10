import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../types";
import {
  createInvoice,
  editInvoice,
  getInvoices,
  setToPaid,
} from "../components/invoices/invoicesApi";

interface InvoicesInicialState {
  invoices: Invoice[];
}

const initialState: InvoicesInicialState = {
  invoices: [],
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.fulfilled, (state, action) => {
        state.invoices = action.payload;
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.invoices.push(action.payload);
      })
      .addCase(editInvoice.fulfilled, (state, action) => {
        const index = state.invoices.findIndex(
          (invoice) => invoice.id === action.payload.id
        );
        state.invoices[index] = { ...state.invoices[index], ...action.payload };
      })
      .addCase(setToPaid.fulfilled, (state, action) => {
        const index = state.invoices.findIndex(
          (invoice) => invoice.id === action.payload.id
        );
        state.invoices[index] = { ...state.invoices[index], status: "paid" };
      });
  },
});

export default invoicesSlice.reducer;
