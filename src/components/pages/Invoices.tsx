import InvoicesList from "../invoices/InvoicesList";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { useAppSelector } from "../../app/redux-hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateInvoiceMessage from "../invoices/CreateInvoiceMessage";
import FilterDropdown from "../ui/FilterDropdown";

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
