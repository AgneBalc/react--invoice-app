import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Invoice } from "../../types";
import DeleteModal from "./DeleteModal";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteInvoice, setToPaid } from "../../utils/invoicesApi";

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
            <button>
              <Link to={"edit"}>Edit</Link>
            </button>
          )}
          <button onClick={() => setIsDeleting(true)}>Delete</button>
          {invoice.status === "pending" && (
            <button onClick={handleMarkAsPaid}>Mark as Paid</button>
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
