import InvoicesList from "../components/home/InvoicesList";
import { ReactComponent as IconPlus } from "../assets/icon-plus.svg";
import { useAppSelector } from "../hooks/redux-hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateInvoiceMessage from "../components/home/CreateInvoiceMessage";
import FilterDropdown from "../components/home/FilterDropdown";

const InvoicesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const { invoices } = useAppSelector((state) => state.invoices);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleFilter = (status: string) => {
    setSelectedStatus(status === selectedStatus ? "" : status);
    setShowFilter(false);
  };

  const filteredInvoices =
    selectedStatus === ""
      ? invoices
      : invoices.filter((invoice) => selectedStatus === invoice.status);

  return (
    <>
      <div className="heading">
        <h1>Invoices</h1>
        {filteredInvoices.length ? (
          <p>{filteredInvoices.length} Invoices</p>
        ) : (
          <p>No invoices</p>
        )}
        <FilterDropdown
          handleFilter={handleFilter}
          selectedStatus={selectedStatus}
          handleFilterToggle={handleFilterToggle}
          showFilter={showFilter}
        />
        <button>
          <Link to="new">
            <IconPlus />
            <span>New Invoice</span>
          </Link>
        </button>
      </div>
      {!filteredInvoices.length ? (
        <CreateInvoiceMessage />
      ) : (
        <InvoicesList filteredInvoices={filteredInvoices} />
      )}
    </>
  );
};

export default InvoicesPage;
