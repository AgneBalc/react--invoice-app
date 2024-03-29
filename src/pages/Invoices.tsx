import InvoicesList from "../components/home/InvoicesList";
import { useAppSelector } from "../hooks/redux-hooks";
import { useState } from "react";
import CreateInvoiceMessage from "../components/home/CreateInvoiceMessage";
import HomeHeader from "../components/home/HomeHeader";
import Loader from "../components/ui/Loader";

const InvoicesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const { invoices, loading } = useAppSelector((state) => state.invoices);

  const filteredInvoices =
    selectedStatus === ""
      ? invoices
      : invoices.filter((invoice) => selectedStatus === invoice.status);

  return (
    <>
      <HomeHeader
        invoices={filteredInvoices}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      {loading ? (
        <Loader />
      ) : !filteredInvoices.length ? (
        <CreateInvoiceMessage />
      ) : (
        <InvoicesList filteredInvoices={filteredInvoices} />
      )}
    </>
  );
};

export default InvoicesPage;
