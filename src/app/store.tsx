import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./invoices-slice";
import { fetchAllInvoices } from "../components/invoices/invoicesApi";

const store = configureStore({
  reducer: {
    invoices: InvoiceReducer,
  },
});

store.dispatch(fetchAllInvoices());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
