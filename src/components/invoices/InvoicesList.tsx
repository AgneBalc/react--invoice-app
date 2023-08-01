import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { fetchAllInvoices } from "./invoicesApi";
import InvoiceItem from "./InvoiceItem";

const InvoicesList: FC = () => {
  const dispatch = useAppDispatch();
  const { invoices } = useAppSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchAllInvoices());
  }, [dispatch]);

  return (
    <section>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </section>
  );
};

export default InvoicesList;
