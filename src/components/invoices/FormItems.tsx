import { Invoice, Item } from "../../types";
import { FieldArray, FormikProps } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";

interface FormItemsProps {
  items: Item[];
  formik: FormikProps<Invoice>;
}

const FormItems = ({ items, formik }: FormItemsProps) => {
  return (
    <div>
      <h3>Items List</h3>
      <FieldArray
        name="items"
        render={(arrayHelpers) => (
          <div>
            {items?.length > 0 &&
              items?.map((_, index: number) => (
                <div key={index}>
                  <div className="item-name">
                    <label htmlFor={`item-name-${index}`}>Item Name</label>
                    <input
                      type="text"
                      id={`item-name-${index}`}
                      {...formik.getFieldProps(`items[${index}].name`)}
                    />
                  </div>
                  <div className="item-qty">
                    <label htmlFor={`item-quantity-${index}`}>Qty</label>
                    <input
                      type="number"
                      id={`item-quantity-${index}`}
                      min="0"
                      step="1"
                      {...formik.getFieldProps(`items[${index}].quantity`)}
                    />
                  </div>
                  <div className="item-price">
                    <label htmlFor={`item-price-${index}`}>Price</label>
                    <input
                      type="number"
                      id={`item-price-${index}`}
                      min="0"
                      step="0.01"
                      {...formik.getFieldProps(`items[${index}].price`)}
                    />
                  </div>
                  <div className="item-total">
                    <label htmlFor={`item-total-${index}`}>Total</label>
                    <input
                      type="number"
                      id={`item-total-${index}`}
                      readOnly={true}
                      {...formik.getFieldProps(`items[${index}].total`)}
                    />
                  </div>
                </div>
              ))}
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({ name: "", quantity: 1, total: 0, price: 0 })
              }
            >
              <PlusIcon />
              <span>Add New Item</span>
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default FormItems;
