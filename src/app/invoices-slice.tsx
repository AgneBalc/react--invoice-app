import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Invoice, InvoiceStatus } from "../types";
import { fetchAllInvoices } from "../components/invoices/invoicesApi";

interface InvoicesInicialState {
  invoices: Invoice[];
  status: InvoiceStatus;
  loading: boolean;
  error: string | undefined;
}

const initialState: InvoicesInicialState = {
  invoices: [],
  status: "draft",
  loading: false,
  error: undefined,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    // addInvoice(state, action: PayloadAction<Invoice>) {},
    // editInvoice(state, action: PayloadAction<string>) {},
    // removeInvoice(state, action: PayloadAction<string>) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInvoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllInvoices.fulfilled,
        (state, action: PayloadAction<Invoice[]>) => {
          state.loading = false;
          state.invoices = action.payload;
        }
      )
      .addCase(
        fetchAllInvoices.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
        }
      );
  },
});

// export const { addInvoice, editInvoice, removeInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
