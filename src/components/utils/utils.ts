import { Invoice } from "../../types";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
};

export const getPaymentDueDate = (date: string, days: number) => {
  let dateObj = new Date(date);
  dateObj.setDate(dateObj.getDate() + days);
  return dateObj.toDateString();
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
