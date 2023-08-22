import InvoiceForm from "../components/form/InvoiceForm";

const NewInvoicePage = () => {
  return (
    <section>
      <h1>New Invoice</h1>
      <InvoiceForm edittingInvoice={undefined} />
    </section>
  );
};

export default NewInvoicePage;
