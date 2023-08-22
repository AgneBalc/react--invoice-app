import { ReactComponent as IconEmpty } from "../../assets/illustration-empty.svg";

const CreateInvoiceMessage = () => {
  return (
    <section>
      <IconEmpty />
      <h2>There is nothing here.</h2>
      <p>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </p>
    </section>
  );
};

export default CreateInvoiceMessage;
