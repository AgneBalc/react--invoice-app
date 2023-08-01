import { ReactComponent as IconArrowLeft } from "../../assets/icon-arrow-left.svg";

const InvoiceDetailPage = () => {
  return (
    <>
      <button>
        <IconArrowLeft />
        <span>Go back</span>
      </button>
      <div className="header">
        <p>Status</p>
        <div className="status-box">
          <div></div>
          <p>{invoice.status}</p>
        </div>
        <div className="action-buttons">
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <section>
        <div className="main-info">
          <div>
            <h1>{invoice.id}</h1>
            <p>{invoice.description}</p>
          </div>
          <address>
            {invoice.senderAddress.street}
            <br />
            {invoice.senderAddress.city}
            <br />
            {invoice.senderAddress.postCode}
            <br />
            {invoice.senderAddress.country}
          </address>
          <div className="invoice-dates">
            <div className="created-date">
              <h2>Invoice date</h2>
              <p>{invoice.createdAt}</p>
            </div>
            <div className="payment-due">
              <h2>Payment Due</h2>
              <p>{invoice.paymentDue}</p>
            </div>
          </div>
          <div className="client-address">
            <div className="clilent-name">
              <h2>Bill To</h2>
              <p>{invoice.clientName}</p>
            </div>
            <address>
              {invoice.clientAddress.street}
              <br />
              {invoice.clientAddress.city}
              <br />
              {invoice.clientAddress.postCode}
              <br />
              {invoice.clientAddress.country}
            </address>
          </div>
          <div className="client-email">
            <h2>Sent to</h2>
            <p>{invoice.clientEmail}</p>
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
            <tr>
              <td>{invoice.items.name}</td>
              <td>{invoice.items.quantity}</td>
              <td>&euro;{invoice.items.price}</td>
              <td>&euro;{invoice.items.total}</td>
            </tr>
          </tbody>
          <tfoot>
            <td>Amount Due</td>
            <td colSpan={3}>&euro;{invoice.total}</td>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default InvoiceDetailPage;
