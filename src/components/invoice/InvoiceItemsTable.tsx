import { Invoice } from "../../utils/types";
import {
  ItemsTable,
  Body,
  ItemName,
  ItemQtyPrice,
  ItemTotalCol,
  Footer,
  TotalLabel,
  InvoiceTotal,
  ItemNameHead,
  ItemQtyHead,
  ItemPriceHead,
  ItemTotalHead,
  ItemQty,
  ItemNameCol,
} from "./styles/InvoiceItemsTable.styles";

interface InvoiceItemsTableProps {
  invoice: Invoice;
}

const InvoiceItemsTable = ({ invoice }: InvoiceItemsTableProps) => {
  return (
    <ItemsTable>
      <thead>
        <tr>
          <ItemNameHead>Item Name</ItemNameHead>
          <ItemQtyHead>QTY.</ItemQtyHead>
          <ItemPriceHead>Price</ItemPriceHead>
          <ItemTotalHead>Total</ItemTotalHead>
        </tr>
      </thead>
      <Body>
        {invoice.items.map((item, index) => (
          <tr key={index}>
            <ItemNameCol>
              <p>{item.name}</p>
              <p>
                &euro;{item.price.toFixed(2)} X {item.quantity}
              </p>
            </ItemNameCol>
            <ItemName>{item.name}</ItemName>
            <ItemQty>{item.quantity}</ItemQty>
            <ItemQtyPrice>&euro;{item.price.toFixed(2)}</ItemQtyPrice>
            <ItemTotalCol>&euro;{item.total.toFixed(2)}</ItemTotalCol>
          </tr>
        ))}
      </Body>
      <Footer>
        <tr>
          <TotalLabel>
            {invoice.status === "paid" ? "Grand total" : "Amount Due"}
          </TotalLabel>
          <InvoiceTotal colSpan={3}>
            &euro;{invoice.total.toFixed(2)}
          </InvoiceTotal>
        </tr>
      </Footer>
    </ItemsTable>
  );
};

export default InvoiceItemsTable;
