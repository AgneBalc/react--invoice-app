import { useEffect, useState } from "react";
import InvoicesList from "../invoices/InvoicesList";
import { Invoice } from "../../types";

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          "https://react-http-35b06-default-rtdb.firebaseio.com/.json"
        );

        if (!response.ok) {
          throw new Error("Could not fetch the data.");
        }

        const resData = await response.json();
        setInvoices(resData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <>
      <h1>Invoices</h1>
      {invoices.map((invoice) => (
        <InvoicesList key={invoice.id} invoice={invoice} />
      ))}
    </>
  );
};

export default InvoicesPage;
