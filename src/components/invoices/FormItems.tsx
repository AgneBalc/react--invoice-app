import { Invoice, Item } from "../../types";
import { FieldArray, FormikProps } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import FormItem from "./FormItem";

interface FormItemsProps {
  items: Item[];
  formik: FormikProps<Invoice>;
}

const FormItems = ({ items, formik }: FormItemsProps) => {
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
              items?.map((item: Item, index: number) => (
                <FormItem
                  key={index}
                  item={item}
                  formik={formik}
                  index={index}
                />
              ))}
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({ name: "", quantity: 0, total: 0, price: 0 })
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
