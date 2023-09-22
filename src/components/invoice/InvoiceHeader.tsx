import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Invoice } from "../../utils/types";
import DeleteModal from "./DeleteModal";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteInvoice, setToPaid } from "../../utils/invoicesApi";
import Button from "../ui/Button";
import {
  InvoiceActions,
  InvoiceHeaderWrapper,
  InvoiceStatusContainer,
  InvoiceStatusText,
  StatusLabel,
} from "./styles/InvoiceHeader.styles";

interface InvoiceHeaderProps {
  invoice: Invoice;
}

const InvoiceHeader = ({ invoice }: InvoiceHeaderProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteInvoice(invoice.id));
    navigate("/");
  };

  const handleMarkAsPaid = () => {
    dispatch(setToPaid(invoice.id));
  };

  return (
    <>
      <InvoiceHeaderWrapper>
        <StatusLabel>Status</StatusLabel>
        <InvoiceStatusContainer status={invoice.status}>
          <div>
            <InvoiceStatusText status={invoice.status}>
              {invoice.status}
            </InvoiceStatusText>
          </div>
        </InvoiceStatusContainer>
        <InvoiceActions>
          {invoice.status !== "paid" && (
            <Button variant="secondary">
              <Link to={"edit"}>Edit</Link>
            </Button>
          )}
          <Button variant="warning" onClick={() => setIsDeleting(true)}>
            Delete
          </Button>
          {invoice.status === "pending" && (
            <Button variant="primary" onClick={handleMarkAsPaid}>
              Mark as Paid
            </Button>
          )}
        </InvoiceActions>
      </InvoiceHeaderWrapper>
      {isDeleting && (
        <DeleteModal
          id={invoice.id}
          onConfirm={handleDelete}
          onCancel={() => setIsDeleting(false)}
        />
      )}
    </>
  );
};

export default InvoiceHeader;
