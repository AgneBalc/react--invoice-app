import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import IconArrowLeft from "../assets/icon-arrow-left.svg";
import InvoiceInfo from "../components/invoice/InvoiceInfo";
import InvoiceHeader from "../components/invoice/InvoiceHeader";
import { BackButton } from "./styles/InvoiceDetail.styled";

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
      <BackButton to="/">
        <img src={IconArrowLeft} alt="" />
        Go back
      </BackButton>
      <InvoiceHeader invoice={currentInvoice} />
      <InvoiceInfo invoice={currentInvoice} />
    </>
  );
};

export default InvoiceDetailPage;
