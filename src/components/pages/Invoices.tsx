import InvoicesList from "../invoices/InvoicesList";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { useAppSelector } from "../../app/redux-hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateInvoiceMessage from "../invoices/CreateInvoiceMessage";
import FilterDropdown from "../ui/FilterDropdown";

const InvoicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const { invoices } = useAppSelector((state) => state.invoices);

  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };

  const filteredInvoices =
    selectedFilter === "all"
      ? invoices
      : invoices.filter((invoice) => selectedFilter === invoice.status);

  return (
    <>
      <div className="heading">
        <h1>Invoices</h1>
        {filteredInvoices.length ? (
          <p>{filteredInvoices.length} Invoices</p>
        ) : (
          <p>No invoices</p>
        )}
        <div>
          <label htmlFor="filterByStatus">Filter by status</label>
          <select
            name="filterByStatus"
            id="filterByStatus"
            onChange={filterHandler}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <FilterDropdown />
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
