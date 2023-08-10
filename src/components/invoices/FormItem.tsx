import { FormikProps, getIn, FormikErrors } from "formik";
import { Invoice, Item } from "../../types";
import { useEffect } from "react";

interface ItemProps {
  index: number;
  item: Item;
  formik: FormikProps<Invoice>;
}

const FormItem = ({ index, item, formik }: ItemProps) => {
  const items = formik.values.items;

  const getInvoiceTotal = () => {
    const allTotals = items.reduce((acc, curr) => acc + curr.total, 0);

    formik.setFieldValue("total", allTotals);
  };

  useEffect(() => {
    const itemTotal = Number(item.quantity) * Number(item.price);
    formik.setFieldValue(`items[${index}].total`, itemTotal);
  }, [items[index].quantity, items[index].price]);

  useEffect(() => {
    getInvoiceTotal();
  }, [items[index].total]);

  const hasErrorForField = (index: number, fieldName: string) => {
    const itemErrors = formik.errors.items as FormikErrors<Item>[];
    return Boolean(getIn(itemErrors, `${index}.${fieldName}`));
  };

  return (
    <div>
      <div className="item-name">
        <label htmlFor={`items[${index}].name`}>Item Name</label>
        <input
          type="text"
          id={`items[${index}].name`}
          {...formik.getFieldProps(`items[${index}].name`)}
        />
        {hasErrorForField(index, "name") && formik.submitCount > 0 ? (
          <p>{getIn(formik.errors, `items[${index}].name`)}</p>
        ) : null}
      </div>
      <div className="item-qty">
        <label htmlFor={`items[${index}].quantity`}>Qty</label>
        <input
          type="number"
          id={`items[${index}].quantity`}
          step="1"
          {...formik.getFieldProps(`items[${index}].quantity`)}
        />
        {hasErrorForField(index, "quantity") ? (
          <p>{getIn(formik.errors, `items[${index}].quantity`)}</p>
        ) : null}
      </div>
      <div className="item-price">
        <label htmlFor={`items[${index}].price`}>Price</label>
        <input
          type="number"
          id={`items[${index}].price`}
          step="0.01"
          {...formik.getFieldProps(`items[${index}].price`)}
        />
        {hasErrorForField(index, "price") ? (
          <p>{getIn(formik.errors, `items[${index}].price`)}</p>
        ) : null}
      </div>
      <div className="item-total">
        <p>Total</p>
        <span>{item.total}</span>
      </div>
    </div>
  );
};

export default FormItem;
