import { Link } from "react-router-dom";
import { Invoice } from "../../utils/types";
import { formatDate } from "../../utils/helpers";

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <Link to={invoice.id}>
      <div>
        <h3>{invoice.id}</h3>
        <span>Due {formatDate(invoice.paymentDue)}</span>
        <span>{invoice.clientName}</span>
        <span>&euro;{invoice.total.toFixed(2)}</span>
        <div>{invoice.status}</div>
      </div>
    </Link>
  );
};

export default InvoiceCard;
