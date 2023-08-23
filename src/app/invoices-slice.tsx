import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../utils/types";
import {
  createInvoice,
  deleteInvoice,
  editInvoice,
  getInvoices,
  setToPaid,
} from "../utils/invoicesApi";

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
      })
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        const updatedInvoices = state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        );
        state.invoices = updatedInvoices;
      });
  },
});

export default invoicesSlice.reducer;
