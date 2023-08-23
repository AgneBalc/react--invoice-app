import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { ReactComponent as IconArrowLeft } from "../assets/icon-arrow-left.svg";
import InvoiceInfo from "../components/invoice/InvoiceInfo";
import InvoiceHeader from "../components/invoice/InvoiceHeader";

const InvoiceDetailPage = () => {
  const { id: currentInvoiceId } = useParams();

  const currentInvoice = useAppSelector((state) =>
    state.invoices.invoices.find((invoice) => invoice.id === currentInvoiceId)
  );

  if (!currentInvoice) {
    return <p>Loading invoice {currentInvoiceId}...</p>;
  }

  return (
    <>
      <button>
        <Link to={"/"}>
          <IconArrowLeft />
          <span>Go back</span>
        </Link>
      </button>
      <InvoiceHeader invoice={currentInvoice} />
      <InvoiceInfo invoice={currentInvoice} />
    </>
  );
};

export default InvoiceDetailPage;
