import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./invoices-slice";
import ThemeReducer from "./theme-slice";
import { getInvoices } from "../utils/invoicesApi";

const store = configureStore({
  reducer: {
    invoices: InvoiceReducer,
    theme: ThemeReducer,
  },
});

store.dispatch(getInvoices());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
