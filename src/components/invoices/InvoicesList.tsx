import { Invoice } from "../../types";
import InvoiceItem from "./InvoiceItem";

interface InvoicesListProps {
  filteredInvoices: Invoice[];
}

const InvoicesList = ({ filteredInvoices }: InvoicesListProps) => {
  return (
    <section>
      {filteredInvoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </section>
  );
};

export default InvoicesList;
