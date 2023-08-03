import { useAppSelector } from "../../app/redux-hooks";

// const { invoices } = useAppSelector((state) => state.invoices);

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

export const createId = (): string => {
  const id: string =
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    Math.floor(1000 + Math.random() * 9000);

  // const existingId = invoices.find((invoice) => invoice.id === id);

  // if (existingId) return createId();

  return id;
};
