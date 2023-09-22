import { Invoice } from "../../utils/types";
import { formatDate } from "../../utils/helpers";
import {
  DetailsCard,
  DetailsCardGrid,
  AddressContainer,
  InvoiceDetails,
} from "./styles/InvoiceInfo.styles";
import InvoiceItemsTable from "./InvoiceItemsTable";

interface InvoiceInfoProps {
  invoice: Invoice;
}

const InvoiceInfo = ({ invoice }: InvoiceInfoProps) => {
  return (
    <DetailsCard>
      <DetailsCardGrid>
        <div className="invoice-id-name">
          <p>{invoice.id}</p>
          <h1>{invoice.description}</h1>
        </div>
        <AddressContainer className="sender-address">
          {invoice.senderAddress.street}
          <br />
          {invoice.senderAddress.city}
          <br />
          {invoice.senderAddress.postCode}
          <br />
          {invoice.senderAddress.country}
        </AddressContainer>
        <div className="invoice-dates">
          <InvoiceDetails className="created-date">
            <h2>Invoice date</h2>
            <p>{formatDate(invoice.createdAt)}</p>
          </InvoiceDetails>
          <InvoiceDetails className="payment-due">
            <h2>Payment Due</h2>
            <p>{formatDate(invoice.paymentDue)}</p>
          </InvoiceDetails>
        </div>
        <div className="client-name-address">
          <InvoiceDetails className="clilent-name">
            <h2>Bill To</h2>
            <p>{invoice.clientName}</p>
          </InvoiceDetails>
          <InvoiceDetails>
            <address>
              {invoice.clientAddress.street}
              <br />
              {invoice.clientAddress.city}
              <br />
              {invoice.clientAddress.postCode}
              <br />
              {invoice.clientAddress.country}
            </address>
          </InvoiceDetails>
        </div>
        <InvoiceDetails className="client-email">
          <h2>Sent to</h2>
          <p>{invoice.clientEmail}</p>
        </InvoiceDetails>
      </DetailsCardGrid>
      <InvoiceItemsTable invoice={invoice} />
      {/* <table>
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
      </table> */}
    </DetailsCard>
  );
};

export default InvoiceInfo;
