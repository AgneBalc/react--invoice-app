import { FC } from "react";
import { useAppSelector } from "../../app/redux-hooks";
import InvoiceItem from "./InvoiceItem";

const InvoicesList: FC = () => {
  const { invoices } = useAppSelector((state) => state.invoices);
  return (
    <section>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </section>
  );
};

export default InvoicesList;
