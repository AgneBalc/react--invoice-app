import { InvoiceStatus } from "../../utils/types";
import {
  InvoiceStatusContainer,
  InvoiceStatusText,
} from "./styles/InvoiceStatusBadge.styles";

interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
}

const InvoiceStatusBadge = ({ status }: InvoiceStatusBadgeProps) => {
  return (
    <InvoiceStatusContainer status={status}>
      <div>
        <InvoiceStatusText status={status}>{status}</InvoiceStatusText>
      </div>
    </InvoiceStatusContainer>
  );
};

export default InvoiceStatusBadge;
