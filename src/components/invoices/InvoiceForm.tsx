import { useFormik } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import { FormEvent } from "react";
import { Invoice } from "../../types";
import { createId, formatDate, getPaymentDueDate } from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { createInvoice } from "./invoicesApi";
import { useNavigate } from "react-router-dom";

const initialValues: Invoice = {
  id: "",
  createdAt: new Date().toDateString(),
  paymentDue: getPaymentDueDate(new Date().toDateString(), 1),
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

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(createInvoice({ ...values, id: createId(invoices) }));
      navigate("/");
    },
  });

  const handleSaveAsDraft = () => {
    // const createdAt = formatDate(values.createdAt);
    // const id = createId();
  };
  // const handleSaveAndSend = (e: FormEvent) => {
  //   e.preventDefault();
  // };
  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset>
        <legend>Bill From</legend>
        <div>
          <label htmlFor="sender-street">Street Address</label>
          <input
            type="text"
            id="sender-street"
            {...formik.getFieldProps("sender-street")}
          />
        </div>
        <div>
          <div>
            <label htmlFor="sender-city">City</label>
            <input
              type="text"
              id="sender-city"
              {...formik.getFieldProps("sender-city")}
            />
          </div>
          <div>
            <label htmlFor="sender-postal">Postal Code</label>
            <input
              type="text"
              id="sender-postal"
              {...formik.getFieldProps("sender-postal")}
            />
          </div>
          <div>
            <label htmlFor="sender-country">Country</label>
            <input
              type="text"
              id="sender-country"
              {...formik.getFieldProps("sender-country")}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Bill To</legend>
        <div>
          <label htmlFor="client-name">Client's Name</label>
          <input
            type="text"
            id="client-name"
            {...formik.getFieldProps("client-name")}
          />
        </div>
        <div>
          <label htmlFor="client-email">Client's Email</label>
          <input
            type="email"
            id="client-email"
            placeholder="e.g. email@example.com"
            {...formik.getFieldProps("client-email")}
          />
        </div>
        <div>
          <label htmlFor="client-street">Street Address</label>
          <input
            type="text"
            id="client-street"
            {...formik.getFieldProps("client-street")}
          />
        </div>
        <div>
          <div>
            <label htmlFor="client-city">City</label>
            <input
              type="text"
              id="client-city"
              {...formik.getFieldProps("client-city")}
            />
          </div>
          <div>
            <label htmlFor="client-postal">Postal Code</label>
            <input
              type="text"
              id="client-postal"
              {...formik.getFieldProps("client-postal")}
            />
          </div>
          <div>
            <label htmlFor="client-country">Country</label>
            <input
              type="text"
              id="client-country"
              {...formik.getFieldProps("client-country")}
            />
          </div>
        </div>
      </fieldset>
      <div>
        <div>
          <div>
            <label htmlFor="created-date">Invoice Date</label>
            <input
              type="date"
              id="created-date"
              {...formik.getFieldProps("created-date")}
            />
          </div>
          <div>
            <label htmlFor="payment-date">Payment Terms</label>
            <input
              type="date"
              id="payment-date"
              {...formik.getFieldProps("payment-date")}
            />
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
        </div>
      </div>
      <div>
        <h3>Items List</h3>
        <div>
          <div className="item-name">
            <label htmlFor="item-name">Item Name</label>
            <input
              type="text"
              id="item-name"
              placeholder="Item name"
              {...formik.getFieldProps("item-name")}
            />
          </div>
          <div className="item-qty">
            <label htmlFor="item-qty">Qty</label>
            <input
              type="number"
              id="item-qty"
              min="0"
              step="1"
              {...formik.getFieldProps("item-qty")}
            />
          </div>
          <div className="item-price">
            <label htmlFor="item-price">Price</label>
            <input
              type="number"
              id="item-price"
              min="0"
              step="0.01"
              {...formik.getFieldProps("item-price")}
            />
          </div>
          <div className="item-total">
            <label htmlFor="item-total">Total</label>
            <input
              type="number"
              id="item-total"
              readOnly={true}
              {...formik.getFieldProps("item-total")}
            />
          </div>
        </div>
        <button type="button">
          <PlusIcon />
          <span>Add New Item</span>
        </button>
      </div>
      <div className="form-buttons">
        <button type="button">Discard</button>
        <button type="button">Save as Draft</button>
        <button type="submit">Save & Send</button>
      </div>
    </form>
  );
};

export default InvoiceForm;
