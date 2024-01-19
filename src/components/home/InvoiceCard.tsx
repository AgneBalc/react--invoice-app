import IconArrowRight from "../../assets/icon-arrow-right.svg";
import { Invoice } from "../../utils/types";
import { formatDate } from "../../utils/helpers";
import {
  ArrowIcon,
  Amount,
  DueDate,
  ClientName,
  InvoiceID,
  Wrapper,
} from "./styles/InvoiceCard.styles";
import InvoiceStatusBadge from "../ui/InvoiceStatusBadge";

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <Wrapper to={invoice.id}>
      <InvoiceID>{invoice.id}</InvoiceID>
      <DueDate>Due {formatDate(invoice.paymentDue)}</DueDate>
      <ClientName>{invoice.clientName}</ClientName>
      <Amount>&euro;{invoice.total.toFixed(2)}</Amount>
      <InvoiceStatusBadge status={invoice.status} />
      <ArrowIcon>
        <img src={IconArrowRight} alt="" />
      </ArrowIcon>
    </Wrapper>
  );
};

export default InvoiceCard;
