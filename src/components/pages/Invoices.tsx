import InvoicesList from "../invoices/InvoicesList";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { useAppSelector } from "../../app/redux-hooks";
import { Link } from "react-router-dom";
import { useState } from "react";

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
        <p>{filteredInvoices.length} Invoices</p>
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
        <button>
          <Link to="new">
            <IconPlus />
            <span>New Invoice</span>
          </Link>
        </button>
      </div>
      {!invoices.length ? (
        <p>Loading...</p>
      ) : (
        <InvoicesList filteredInvoices={filteredInvoices} />
      )}
    </>
  );
};

export default InvoicesPage;
