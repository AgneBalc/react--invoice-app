import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import IconArrowLeft from "../assets/icon-arrow-left.svg";
import InvoiceInfo from "../components/invoice/InvoiceInfo";
import InvoiceHeader from "../components/invoice/InvoiceHeader";
import { BackButton } from "./styles/InvoiceDetail.styled";

const InvoiceDetailPage = () => {
  const { id: currentInvoiceId } = useParams();

  const { invoices, loading } = useAppSelector((state) => state.invoices);

  const currentInvoice = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  );

  return (
    <>
      <BackButton to="/">
        <img src={IconArrowLeft} alt="" />
        Go back
      </BackButton>
      {loading ? (
        <p>Loading invoice {currentInvoiceId}...</p>
      ) : currentInvoice ? (
        <>
          <InvoiceHeader invoice={currentInvoice} />
          <InvoiceInfo invoice={currentInvoice} />
        </>
      ) : (
        <p>Not Found</p>
      )}
      {/* <InvoiceHeader invoice={currentInvoice} />
      <InvoiceInfo invoice={currentInvoice} /> */}
    </>
  );
};

export default InvoiceDetailPage;
