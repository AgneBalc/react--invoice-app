import { Invoice } from "../../types";

type InvoiceProps = { invoice: Invoice };

const InvoicesList = ({ invoice }: InvoiceProps) => {
  return (
    <ul>
      <li>
        <a href="">
          <h3>{invoice.id}</h3>
          <span>{invoice.paymentDue}</span>
          <span>{invoice.clientName}</span>
          <span>&euro;{invoice.total}</span>
          <div>{invoice.status}</div>
        </a>
      </li>
    </ul>
  );
};

export default InvoicesList;
