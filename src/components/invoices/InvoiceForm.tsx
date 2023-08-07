import { useFormik } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import { FormEvent } from "react";
import { Invoice } from "../../types";
import { createId, formatDate, paymentTermsOptions } from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { createInvoice } from "./invoicesApi";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";

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

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (typeof values.paymentTerms === "string") {
        values.paymentTerms = parseInt(values.paymentTerms, 10);
      }
      const paymentDue = format(
        addDays(new Date(values.createdAt), values.paymentTerms),
        "yyyy-MM-dd"
      );
      dispatch(
        createInvoice({
          ...values,
          id: createId(invoices),
          paymentDue: paymentDue,
          status: "pending",
        })
      );
      navigate("/");
    },
  });

  const handleSaveAsDraft = (values: Invoice) => {
    if (typeof values.paymentTerms === "string") {
      values.paymentTerms = parseInt(values.paymentTerms, 10);
    }
    const paymentDue = format(
      addDays(new Date(values.createdAt), values.paymentTerms),
      "yyyy-MM-dd"
    );
    dispatch(
      createInvoice({
        ...values,
        id: createId(invoices),
        paymentDue: paymentDue,
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset>
        <legend>Bill From</legend>
        <div>
          <label htmlFor="senderAddress.street">Street Address</label>
          <input
            type="text"
            id="senderAddress.street"
            {...formik.getFieldProps("senderAddress.street")}
          />
        </div>
        <div>
          <div>
            <label htmlFor="senderAddress.city">City</label>
            <input
              type="text"
              id="senderAddress.city"
              {...formik.getFieldProps("senderAddress.city")}
            />
          </div>
          <div>
            <label htmlFor="senderAddress.postCode">Postal Code</label>
            <input
              type="text"
              id="senderAddress.postCode"
              {...formik.getFieldProps("senderAddress.postCode")}
            />
          </div>
          <div>
            <label htmlFor="senderAddress.country">Country</label>
            <input
              type="text"
              id="senderAddress.country"
              {...formik.getFieldProps("senderAddress.country")}
            />
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
        </div>
        <div>
          <label htmlFor="clientEmail">Client's Email</label>
          <input
            type="email"
            id="clientEmail"
            placeholder="e.g. email@example.com"
            {...formik.getFieldProps("clientEmail")}
          />
        </div>
        <div>
          <label htmlFor="clientAddress.street">Street Address</label>
          <input
            type="text"
            id="clientAddress.street"
            {...formik.getFieldProps("clientAddress.street")}
          />
        </div>
        <div>
          <div>
            <label htmlFor="clientAddress.city">City</label>
            <input
              type="text"
              id="clientAddress.city"
              {...formik.getFieldProps("clientAddress.city")}
            />
          </div>
          <div>
            <label htmlFor="clientAddress.postCode">Postal Code</label>
            <input
              type="text"
              id="clientAddress.postCode"
              {...formik.getFieldProps("clientAddress.postCode")}
            />
          </div>
          <div>
            <label htmlFor="clientAddress.country">Country</label>
            <input
              type="text"
              id="clientAddress.country"
              {...formik.getFieldProps("clientAddress.country")}
            />
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
            <select id="paymentTerms" {...formik.getFieldProps("paymentTerms")}>
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
        </div>
      </div>
      <div>
        <h3>Items List</h3>
        {/* <div>
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
        </div> */}
        <button type="button">
          <PlusIcon />
          <span>Add New Item</span>
        </button>
      </div>
      <div className="form-buttons">
        <button type="button">Discard</button>
        <button type="button" onClick={() => handleSaveAsDraft(formik.values)}>
          Save as Draft
        </button>
        <button type="submit">Save & Send</button>
      </div>
    </form>
  );
};

export default InvoiceForm;
