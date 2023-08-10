import InvoiceForm from "../invoices/InvoiceForm";

const NewInvoicePage = () => {
  return (
    <section>
      <h1>New Invoice</h1>
      <InvoiceForm edittingInvoice={undefined} />
    </section>
  );
};

export default NewInvoicePage;
