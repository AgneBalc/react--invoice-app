import { Invoice } from "../../utils/types";
import InvoiceCard from "./InvoiceCard";
import { StyledInvoicesList } from "./styles/InvoicesList.styles";

interface InvoicesListProps {
  filteredInvoices: Invoice[];
}

const InvoicesList = ({ filteredInvoices }: InvoicesListProps) => {
  return (
    <StyledInvoicesList>
      {filteredInvoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
