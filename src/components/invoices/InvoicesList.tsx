import { Link } from "react-router-dom";
import { Invoice } from "../../types";

type InvoiceProps = { invoice: Invoice };

const InvoicesList = ({ invoice }: InvoiceProps) => {
  return (
    <ul>
      <li>
        <Link to={invoice.id}>
          <h3>{invoice.id}</h3>
          <span>{invoice.paymentDue}</span>
          <span>{invoice.clientName}</span>
          <span>&euro;{invoice.total}</span>
          <div>{invoice.status}</div>
        </Link>
      </li>
    </ul>
  );
};

export default InvoicesList;
