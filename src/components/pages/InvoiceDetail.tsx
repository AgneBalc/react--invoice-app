import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { ReactComponent as IconArrowLeft } from "../../assets/icon-arrow-left.svg";
import { formatDate } from "../utils/utils";
import { setToPaid } from "../invoices/invoicesApi";

const InvoiceDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id: currentInvoiceId } = useParams();

  const currentInvoice = useAppSelector((state) =>
    state.invoices.invoices.find((invoice) => invoice.id === currentInvoiceId)
  );

  if (!currentInvoice) {
    return <p>Loading invoice {currentInvoiceId}...</p>;
  }

  const handleMarkAsPaid = () => {
    dispatch(setToPaid(currentInvoice.id));
  };

  return (
    <>
      <button>
        <Link to={"/"}>
          <IconArrowLeft />
          <span>Go back</span>
        </Link>
      </button>
      <div className="header">
        <p>Status</p>
        <div className="status-box">
          <div></div>
          <p>{currentInvoice.status}</p>
        </div>
        <div className="action-buttons">
          {currentInvoice.status !== "paid" && (
            <button>
              <Link to={"edit"}>Edit</Link>
            </button>
          )}
          <button>Delete</button>
          {currentInvoice.status === "pending" && (
            <button onClick={handleMarkAsPaid}>Mark as Paid</button>
          )}
        </div>
      </div>
      <section>
        <div className="main-info">
          <div>
            <h1>{currentInvoice.id}</h1>
            <p>{currentInvoice.description}</p>
          </div>
          <address>
            {currentInvoice.senderAddress.street}
            <br />
            {currentInvoice.senderAddress.city}
            <br />
            {currentInvoice.senderAddress.postCode}
            <br />
            {currentInvoice.senderAddress.country}
          </address>
          <div className="invoice-dates">
            <div className="created-date">
              <h2>Invoice date</h2>
              <p>{formatDate(currentInvoice.createdAt)}</p>
            </div>
            <div className="payment-due">
              <h2>Payment Due</h2>
              <p>{formatDate(currentInvoice.paymentDue)}</p>
            </div>
          </div>
          <div className="client-address">
            <div className="clilent-name">
              <h2>Bill To</h2>
              <p>{currentInvoice.clientName}</p>
            </div>
            <address>
              {currentInvoice.clientAddress.street}
              <br />
              {currentInvoice.clientAddress.city}
              <br />
              {currentInvoice.clientAddress.postCode}
              <br />
              {currentInvoice.clientAddress.country}
            </address>
          </div>
          <div className="client-email">
            <h2>Sent to</h2>
            <p>{currentInvoice.clientEmail}</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoice.items.map((item) => (
              <tr key={currentInvoice.id + item.name}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>&euro;{item.price}</td>
                <td>&euro;{item.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Amount Due</td>
              <td colSpan={3}>&euro;{currentInvoice.total}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default InvoiceDetailPage;
