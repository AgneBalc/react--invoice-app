import { Invoice, InvoiceItem } from "../../utils/types";
import { FieldArray, useFormikContext } from "formik";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import Item from "./Item";
import Button from "../ui/Button";

interface ItemListProps {
  items: InvoiceItem[];
}

const ItemList = ({ items }: ItemListProps) => {
  const { errors, submitCount } = useFormikContext<Invoice>();
  return (
    <div>
      <h3>Items List</h3>
      {typeof errors.items === "string" && submitCount > 0 && (
        <p>{errors.items}</p>
      )}
      <FieldArray name="items">
        {({ remove, push }) => (
          <div>
            {items?.length > 0 &&
              items?.map((item: InvoiceItem, index: number) => (
                <Item key={index} item={item} index={index} remove={remove} />
              ))}
            <Button
              type="button"
              className="new-item"
              onClick={() =>
                push({ name: "", quantity: 0, total: 0, price: 0 })
              }
            >
              <PlusIcon />
              <span>Add New Item</span>
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default ItemList;
