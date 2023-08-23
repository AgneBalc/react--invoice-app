import { Form, Formik, FormikErrors } from "formik";
import { Invoice, InvoiceItem } from "../../types";
import { createId, getPaymentDueDate } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { createInvoice, editInvoice } from "../../utils/invoicesApi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ItemList from "./ItemList";
import { invoiceSchema } from "../../utils/validation";
import DatePicker from "./DatePicker";
import SelectDropdown from "./SelectDropdown";
import Input from "./Input";

interface InvoiceFormProps {
  edittingInvoice: Invoice | undefined;
}

const InvoiceForm = ({ edittingInvoice }: InvoiceFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { invoices } = useAppSelector((state) => state.invoices);

  const initialValues: Invoice = {
    id: edittingInvoice ? edittingInvoice.id : "",
    createdAt: format(
      edittingInvoice ? new Date(edittingInvoice.createdAt) : Date.now(),
      "yyyy-MM-dd"
    ),
    paymentDue: edittingInvoice ? edittingInvoice.paymentDue : "",
    description: edittingInvoice ? edittingInvoice.description : "",
    paymentTerms: edittingInvoice ? edittingInvoice.paymentTerms : 1,
    clientName: edittingInvoice ? edittingInvoice.clientName : "",
    clientEmail: edittingInvoice ? edittingInvoice.clientEmail : "",
    status: edittingInvoice ? edittingInvoice.status : "draft",
    senderAddress: {
      street: edittingInvoice ? edittingInvoice.senderAddress.street : "",
      city: edittingInvoice ? edittingInvoice.senderAddress.city : "",
      postCode: edittingInvoice ? edittingInvoice.senderAddress.postCode : "",
      country: edittingInvoice ? edittingInvoice.senderAddress.country : "",
    },
    clientAddress: {
      street: edittingInvoice ? edittingInvoice.clientAddress.street : "",
      city: edittingInvoice ? edittingInvoice.clientAddress.city : "",
      postCode: edittingInvoice ? edittingInvoice.clientAddress.postCode : "",
      country: edittingInvoice ? edittingInvoice.clientAddress.country : "",
    },
    items: edittingInvoice ? edittingInvoice.items : [],
    total: edittingInvoice ? edittingInvoice.total : 0,
  };

  const handleSubmit = (values: Invoice) => {
    const paymentDue = getPaymentDueDate(values.createdAt, values.paymentTerms);

    if (edittingInvoice) {
      dispatch(
        editInvoice({
          ...values,
          paymentDue,
          status: "pending",
        })
      );
    } else {
      dispatch(
        createInvoice({
          ...values,
          id: createId(invoices),
          paymentDue,
          status: "pending",
        })
      );
    }
    navigate("/");
  };

  const handleSaveAsDraft = (values: Invoice) => {
    dispatch(
      createInvoice({
        ...values,
        id: createId(invoices),
        paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
      })
    );
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={invoiceSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <Form>
          <fieldset>
            <legend>Bill From</legend>
            <Input
              name="senderAddress.street"
              type="text"
              label="Street Address"
              formik={formik}
            />
            <div>
              <Input
                name="senderAddress.city"
                type="text"
                label="City"
                formik={formik}
              />
              <Input
                name="senderAddress.postCode"
                type="text"
                label="Postal Code"
                formik={formik}
              />
              <Input
                name="senderAddress.country"
                type="text"
                label="Country"
                formik={formik}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Bill To</legend>
            <Input
              name="clientName"
              type="text"
              label="Client's Name"
              formik={formik}
            />
            <Input
              name="clientEmail"
              type="email"
              label="Client's Email"
              formik={formik}
            />
            <Input
              name="clientAddress.street"
              type="text"
              label="Street Address"
              formik={formik}
            />
            <div>
              <Input
                name="clientAddress.city"
                type="text"
                label="City"
                formik={formik}
              />
              <Input
                name="clientAddress.postCode"
                type="text"
                label="Postal Code"
                formik={formik}
              />
              <Input
                name="clientAddress.country"
                type="text"
                label="Country"
                formik={formik}
              />
            </div>
          </fieldset>
          <div>
            <div>
              <DatePicker formik={formik} />
              <SelectDropdown formik={formik} />
            </div>
            <Input
              name="description"
              type="text"
              label="Project Description"
              placeholder="e.g. Graphic Design Service"
              formik={formik}
            />
          </div>
          <div>
            <ItemList items={formik.values.items} formik={formik} />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={() => navigate("/")}>
              {edittingInvoice ? "Cancel" : "Discard"}
            </button>
            {!edittingInvoice && (
              <button
                type="button"
                onClick={() => handleSaveAsDraft(formik.values)}
                disabled={
                  typeof formik.errors.items === "object" &&
                  (formik.errors.items as FormikErrors<InvoiceItem>[]).some(
                    (item: FormikErrors<InvoiceItem>) =>
                      typeof item === "object" && (item.quantity || item.price)
                  )
                }
              >
                Save as Draft
              </button>
            )}
            <button type="submit">
              {edittingInvoice ? "Save Changes" : "Save & Send"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InvoiceForm;
