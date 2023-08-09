import { Form, Formik, FormikErrors } from "formik";
import { Invoice, Item } from "../../types";
import {
  createId,
  getPaymentDueDate,
  getTotal,
  paymentTermsOptions,
} from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { createInvoice } from "./invoicesApi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import FormItems from "./FormItems";
import { invoiceSchema } from "../utils/validation";

const initialValues: Invoice = {
  id: "",
  createdAt: format(Date.now(), "yyyy-MM-dd"),
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "draft",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};

const InvoiceForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { invoices } = useAppSelector((state) => state.invoices);

  const handleSubmit = (values: Invoice) => {
    dispatch(
      createInvoice({
        ...values,
        id: createId(invoices),
        paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
        status: "pending",
        total: getTotal(values.items),
      })
    );
    navigate("/");
  };

  const handleSaveAsDraft = (values: Invoice) => {
    console.log(values);
    dispatch(
      createInvoice({
        ...values,
        id: createId(invoices),
        paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
        total: getTotal(values.items),
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
              <div>
                <label htmlFor="createdAt">Invoice Date</label>
                <input
                  type="date"
                  id="createdAt"
                  {...formik.getFieldProps("createdAt")}
                />
              </div>
              <div>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select
                  id="paymentTerms"
                  {...formik.getFieldProps("paymentTerms")}
                >
                  {paymentTermsOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
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
              Discard
            </button>
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
            <button type="submit">Save & Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InvoiceForm;
