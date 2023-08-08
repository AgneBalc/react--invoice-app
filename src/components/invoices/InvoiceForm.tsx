import { useFormik } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import { Invoice, Item } from "../../types";
import {
  createId,
  getPaymentDueDate,
  paymentTermsOptions,
} from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { createInvoice } from "./invoicesApi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import FormItems from "./FormItems";
import { useState } from "react";

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
  const [itemsList, setItemsList] = useState<Item[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { invoices } = useAppSelector((state) => state.invoices);

  const handleAddItem = () => {
    const newItem: Item = { name: "New Item", quantity: 1, total: 0, price: 0 };
    setItemsList((prevItems) => prevItems.concat(newItem));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        createInvoice({
          ...values,
          id: createId(invoices),
          paymentDue: getPaymentDueDate(values.createdAt, values.paymentTerms),
          status: "pending",
        })
      );
      navigate("/");
    },
  });

  const handleSaveAsDraft = (values: Invoice) => {
    console.log(values);
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
        {itemsList.length > 0 &&
          itemsList.map((item, index) => (
            <FormItems key={index} item={item} index={index} formik={formik} />
          ))}
        <button type="button" onClick={() => handleAddItem()}>
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
