import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./invoices-slice";

const store = configureStore({
  reducer: {
    invoices: InvoiceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
