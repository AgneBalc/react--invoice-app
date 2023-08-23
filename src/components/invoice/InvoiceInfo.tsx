import { Invoice } from "../../utils/types";
import { formatDate } from "../../utils/helpers";

interface InvoiceInfoProps {
  invoice: Invoice;
}

const InvoiceInfo = ({ invoice }: InvoiceInfoProps) => {
  return (
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
            <p>{formatDate(invoice.createdAt)}</p>
          </div>
          <div className="payment-due">
            <h2>Payment Due</h2>
            <p>{formatDate(invoice.paymentDue)}</p>
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
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>&euro;{item.price.toFixed(2)}</td>
              <td>&euro;{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Amount Due</td>
            <td colSpan={3}>&euro;{invoice.total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default InvoiceInfo;
