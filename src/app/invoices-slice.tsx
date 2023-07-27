import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Invoice, InvoiceStatus } from "../types";

type InvoicesInicialState = {
  invoices: Invoice[];
  status: InvoiceStatus;
  totalQuantity: number;
};

const initialState: InvoicesInicialState = {
  invoices: [],
  status: "draft",
  totalQuantity: 0,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice(state, action: PayloadAction<Invoice>) {},
    editInvoice(state, action: PayloadAction<string>) {},
    removeInvoice(state, action: PayloadAction<string>) {},
  },
});

export const { addInvoice, editInvoice, removeInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
