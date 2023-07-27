import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./invoices-slice";

const store = configureStore({
  reducer: {
    invoices: InvoiceReducer,
  },
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
