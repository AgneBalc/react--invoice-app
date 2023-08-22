import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import InvoiceForm from "../components/form/InvoiceForm";

const EditInvoicePage = () => {
  const { invoices } = useAppSelector((state) => state.invoices);
  const { id: currentInvoiceId } = useParams();

  const currentInvoice = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  );

  return (
    <section>
      <h1>Edit {currentInvoiceId}</h1>
      <InvoiceForm edittingInvoice={currentInvoice} />
    </section>
  );
};

export default EditInvoicePage;
