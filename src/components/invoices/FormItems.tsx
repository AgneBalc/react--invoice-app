import { Invoice, Item } from "../../types";
import { FieldArray, FormikProps, getIn, FormikErrors } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";

interface FormItemsProps {
  items: Item[];
  formik: FormikProps<Invoice>;
}

const FormItems = ({ items, formik }: FormItemsProps) => {
  const hasErrorForField = (index: number, fieldName: string) => {
    const itemErrors = formik.errors.items as FormikErrors<Item>[];
    return Boolean(getIn(itemErrors, `${index}.${fieldName}`));
  };

  return (
    <div>
      <h3>Items List</h3>
      {typeof formik.errors.items === "string" && formik.submitCount > 0 && (
        <p>{formik.errors.items}</p>
      )}
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
                    {hasErrorForField(index, "name") &&
                    formik.submitCount > 0 ? (
                      <p>{getIn(formik.errors, `items[${index}].name`)}</p>
                    ) : null}
                  </div>
                  <div className="item-qty">
                    <label htmlFor={`item-quantity-${index}`}>Qty</label>
                    <input
                      type="number"
                      id={`item-quantity-${index}`}
                      step="1"
                      {...formik.getFieldProps(`items[${index}].quantity`)}
                    />
                    {hasErrorForField(index, "quantity") ? (
                      <p>{getIn(formik.errors, `items[${index}].quantity`)}</p>
                    ) : null}
                  </div>
                  <div className="item-price">
                    <label htmlFor={`item-price-${index}`}>Price</label>
                    <input
                      type="number"
                      id={`item-price-${index}`}
                      step="0.01"
                      {...formik.getFieldProps(`items[${index}].price`)}
                    />
                    {hasErrorForField(index, "price") ? (
                      <p>{getIn(formik.errors, `items[${index}].price`)}</p>
                    ) : null}
                  </div>
                  <div className="item-total">
                    <p>Total</p>
                    <span>
                      &euro;{items[index].price * items[index].quantity}
                    </span>
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
