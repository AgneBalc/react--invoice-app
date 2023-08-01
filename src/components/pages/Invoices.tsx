import { FC, useEffect } from "react";
import InvoicesList from "../invoices/InvoicesList";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { fetchAllInvoices } from "../invoices/invoicesApi";
import { useSelector } from "react-redux";

const InvoicesPage: FC = () => {
  const dispatch = useAppDispatch();
  const { invoices } = useAppSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchAllInvoices());
  }, [dispatch]);

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
      {invoices.map((invoice) => (
        <InvoicesList key={invoice.id} invoice={invoice} />
      ))}
    </>
  );
};

export default InvoicesPage;
