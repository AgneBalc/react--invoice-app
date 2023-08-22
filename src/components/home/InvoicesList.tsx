import { Invoice } from "../../types";
import InvoiceCard from "./InvoiceCard";

interface InvoicesListProps {
  filteredInvoices: Invoice[];
}

const InvoicesList = ({ filteredInvoices }: InvoicesListProps) => {
  return (
    <section>
      {filteredInvoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </section>
  );
};

export default InvoicesList;
