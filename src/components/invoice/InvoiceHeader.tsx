import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Invoice } from "../../utils/types";
import DeleteModal from "./DeleteModal";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteInvoice, setToPaid } from "../../utils/invoicesApi";
import Button from "../ui/Button";

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
      <div className="header">
        <p>Status</p>
        <div className="status-box">
          <div></div>
          <p>{invoice.status}</p>
        </div>
        <div className="action-buttons">
          {invoice.status !== "paid" && (
            <Button className="edit">
              <Link to={"edit"}>Edit</Link>
            </Button>
          )}
          <Button className="delete" onClick={() => setIsDeleting(true)}>
            Delete
          </Button>
          {invoice.status === "pending" && (
            <Button className="paid" onClick={handleMarkAsPaid}>
              Mark as Paid
            </Button>
          )}
        </div>
      </div>
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
