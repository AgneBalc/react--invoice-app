import { Invoice, Item } from "../../types";
import { FormikProps } from "formik";

interface FormItemsProps {
  item: Item;
  index: number;
  formik: FormikProps<Invoice>;
}

const FormItems = ({ item, index, formik }: FormItemsProps) => {
  console.log(item);
  return (
    <div>
      <div className="item-name">
        <label htmlFor={`item-name-${index}`}>Item Name</label>
        <input
          type="text"
          id={`item-name-${index}`}
          {...formik.getFieldProps(`items[${index}].name`)}
        />
      </div>
      {/* <div className="item-qty">
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
      </div> */}
    </div>
  );
};

export default FormItems;
