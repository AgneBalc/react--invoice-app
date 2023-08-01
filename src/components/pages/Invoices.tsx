import InvoicesList from "../invoices/InvoicesList";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { useAppSelector } from "../../app/redux-hooks";

const InvoicesPage = () => {
  const { invoices } = useAppSelector((state) => state.invoices);

  return (
    <>
      <div className="heading">
        <h1>Invoices</h1>
        <p>{invoices.length} Invoices</p>
        <div>
          <label htmlFor="">Filter by status</label>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Pending</option>
            <option value="">Draft</option>
            <option value="">Paid</option>
          </select>
        </div>
        <button>
          <IconPlus />
          <span>New Invoice</span>
        </button>
      </div>
      {!invoices.length ? <p>Loading...</p> : <InvoicesList />}
    </>
  );
};

export default InvoicesPage;
