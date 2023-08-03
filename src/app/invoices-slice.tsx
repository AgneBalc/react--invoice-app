import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Invoice, InvoiceStatus } from "../types";
import { createInvoice, getInvoices } from "../components/invoices/invoicesApi";

interface InvoicesInicialState {
  invoices: Invoice[];
  status: InvoiceStatus;
}

const initialState: InvoicesInicialState = {
  invoices: [],
  status: "draft",
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice(state, action: PayloadAction<Invoice>) {
      state.invoices.unshift(action.payload);
    },
    editInvoice(state, action: PayloadAction<string>) {},
    removeInvoice(state, action: PayloadAction<string>) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.invoices = action.payload;
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        console.log(action.payload);
        state.invoices.unshift(action.payload);
      });
  },
});

export const { addInvoice, editInvoice, removeInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
