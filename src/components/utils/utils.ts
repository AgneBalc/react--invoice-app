import { format, addDays } from "date-fns";
import { Invoice, Item } from "../../types";

export const formatDate = (date: string) => {
  return format(new Date(date), "dd MMM yyyy");
};

export const getPaymentDueDate = (date: string, amount: number | string) => {
  if (typeof amount === "string") {
    amount = parseInt(amount, 10);
  }
  return format(addDays(new Date(date), amount), "yyyy-MM-dd");
};

export const createId = (invoices: Invoice[]): string => {
  const id =
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    Math.floor(1000 + Math.random() * 9000);

  const existingId = invoices.find((invoice) => invoice.id === id);
  if (existingId) return createId(invoices);

  return id;
};

export const paymentTermsOptions = [
  { value: 1, text: "Net 1 Day" },
  { value: 7, text: "Net 7 Days" },
  { value: 14, text: "Net 14 Days" },
  { value: 30, text: "Net 30 Days" },
];

export const getTotal = (items: Item[]) => {
  if (items.length === 1) return items[0].total;

  return items.reduce((acc, curr) => acc + curr.total, 1);
};
