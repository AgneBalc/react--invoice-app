import { useEffect, useState } from "react";
import InvoicesList from "../invoices/InvoicesList";
import { Invoice } from "../../types";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";

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
      <div className="heading">
        <h1>Invoices</h1>
        <p>Invoices</p>
        <div>
          <label htmlFor="">Filter by status</label>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Pending</option>
            <option value="">Draft</option>
            <option value="">Paid</option>
          </select>
        </div>
        <button>
          <IconPlus />
          <span>New Invoice</span>
        </button>
      </div>
      {invoices.map((invoice) => (
        <InvoicesList key={invoice.id} invoice={invoice} />
      ))}
    </>
  );
};

export default InvoicesPage;
