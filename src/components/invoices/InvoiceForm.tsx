import { Form, Formik, FormikErrors } from "formik";
import { Invoice, Item } from "../../types";
import {
  createId,
  getPaymentDueDate,
  paymentTermsOptions,
} from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { createInvoice, editInvoice } from "./invoicesApi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import FormItems from "./FormItems";
import { invoiceSchema } from "../utils/validation";
import DatePicker from "../ui/DatePicker";
import SelectDropdown from "../ui/SelectDropdown";

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
    if (edittingInvoice) {
      dispatch(
        editInvoice({
          ...values,
          paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
          status: "pending",
        })
      );
    } else {
      dispatch(
        createInvoice({
          ...values,
          id: createId(invoices),
          paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
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
            <div>
              <label htmlFor="senderAddress.street">Street Address</label>
              <input
                type="text"
                id="senderAddress.street"
                {...formik.getFieldProps("senderAddress.street")}
              />
              {formik.errors.senderAddress?.street &&
                formik.submitCount > 0 && (
                  <p>{formik.errors.senderAddress.street}</p>
                )}
            </div>
            <div>
              <div>
                <label htmlFor="senderAddress.city">City</label>
                <input
                  type="text"
                  id="senderAddress.city"
                  {...formik.getFieldProps("senderAddress.city")}
                />
                {formik.errors.senderAddress?.city &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.senderAddress.city}</p>
                  )}
              </div>
              <div>
                <label htmlFor="senderAddress.postCode">Postal Code</label>
                <input
                  type="text"
                  id="senderAddress.postCode"
                  {...formik.getFieldProps("senderAddress.postCode")}
                />
                {formik.errors.senderAddress?.postCode &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.senderAddress.postCode}</p>
                  )}
              </div>
              <div>
                <label htmlFor="senderAddress.country">Country</label>
                <input
                  type="text"
                  id="senderAddress.country"
                  {...formik.getFieldProps("senderAddress.country")}
                />
                {formik.errors.senderAddress?.country &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.senderAddress.country}</p>
                  )}
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Bill To</legend>
            <div>
              <label htmlFor="clientName">Client's Name</label>
              <input
                type="text"
                id="clientName"
                {...formik.getFieldProps("clientName")}
              />
              {formik.errors.clientName && formik.submitCount > 0 && (
                <p>{formik.errors.clientName}</p>
              )}
            </div>
            <div>
              <label htmlFor="clientEmail">Client's Email</label>
              <input
                type="email"
                id="clientEmail"
                placeholder="e.g. email@example.com"
                {...formik.getFieldProps("clientEmail")}
              />
              {formik.errors.clientEmail && formik.submitCount > 0 && (
                <p>{formik.errors.clientEmail}</p>
              )}
            </div>
            <div>
              <label htmlFor="clientAddress.street">Street Address</label>
              <input
                type="text"
                id="clientAddress.street"
                {...formik.getFieldProps("clientAddress.street")}
              />
              {formik.errors.clientAddress?.street &&
                formik.submitCount > 0 && (
                  <p>{formik.errors.clientAddress.street}</p>
                )}
            </div>
            <div>
              <div>
                <label htmlFor="clientAddress.city">City</label>
                <input
                  type="text"
                  id="clientAddress.city"
                  {...formik.getFieldProps("clientAddress.city")}
                />
                {formik.errors.clientAddress?.city &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.clientAddress.city}</p>
                  )}
              </div>
              <div>
                <label htmlFor="clientAddress.postCode">Postal Code</label>
                <input
                  type="text"
                  id="clientAddress.postCode"
                  {...formik.getFieldProps("clientAddress.postCode")}
                />
                {formik.errors.clientAddress?.postCode &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.clientAddress.postCode}</p>
                  )}
              </div>
              <div>
                <label htmlFor="clientAddress.country">Country</label>
                <input
                  type="text"
                  id="clientAddress.country"
                  {...formik.getFieldProps("clientAddress.country")}
                />
                {formik.errors.clientAddress?.country &&
                  formik.submitCount > 0 && (
                    <p>{formik.errors.clientAddress.country}</p>
                  )}
              </div>
            </div>
          </fieldset>
          <div>
            <div>
              <DatePicker formik={formik} />
              <SelectDropdown formik={formik} />
            </div>
            <div>
              <label htmlFor="description">Project Description</label>
              <input
                type="text"
                id="description"
                placeholder="e.g. Graphic Design Service"
                {...formik.getFieldProps("description")}
              />
              {formik.errors.description && formik.submitCount > 0 && (
                <p>{formik.errors.description}</p>
              )}
            </div>
          </div>
          <div>
            <FormItems items={formik.values.items} formik={formik} />
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
                  (formik.errors.items as FormikErrors<Item>[]).some(
                    (item: FormikErrors<Item>) =>
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
