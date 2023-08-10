import { useParams } from "react-router-dom";
import InvoiceForm from "../invoices/InvoiceForm";
import { useAppSelector } from "../../app/redux-hooks";

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
