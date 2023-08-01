import { Link } from "react-router-dom";
import { Invoice } from "../../types";

type InvoiceItemProps = { invoice: Invoice };

const InvoiceItem = ({ invoice }: InvoiceItemProps) => {
  return (
    <Link to={invoice.id}>
      <div>
        <h3>{invoice.id}</h3>
        <span>{invoice.paymentDue}</span>
        <span>{invoice.clientName}</span>
        <span>&euro;{invoice.total}</span>
        <div>{invoice.status}</div>
      </div>
    </Link>
  );
};

export default InvoiceItem;
