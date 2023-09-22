import { Invoice, InvoiceItem } from "../../utils/types";
import { FieldArray, useFormikContext } from "formik";
import Item from "./Item";
import { Wrapper, AddNewItemButton } from "./styles/ItemList.styles";

interface ItemListProps {
  items: InvoiceItem[];
}

const ItemList = ({ items }: ItemListProps) => {
  const { errors, submitCount } = useFormikContext<Invoice>();
  return (
    <Wrapper>
      <span>Items List</span>
      {typeof errors.items === "string" && submitCount > 0 && (
        <p className="error">{errors.items}</p>
      )}
      <FieldArray name="items">
        {({ remove, push }) => (
          <div>
            {items?.length > 0 &&
              items?.map((item: InvoiceItem, index: number) => (
                <Item key={index} item={item} index={index} remove={remove} />
              ))}
            <AddNewItemButton
              variant="secondary"
              type="button"
              className="new-item"
              onClick={() =>
                push({ name: "", quantity: 0, total: 0, price: 0 })
              }
            >
              + Add New Item
            </AddNewItemButton>
          </div>
        )}
      </FieldArray>
    </Wrapper>
  );
};

export default ItemList;
