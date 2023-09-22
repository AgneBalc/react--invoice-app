import { useFormikContext } from "formik";
import { Invoice, InvoiceItem } from "../../utils/types";
import { useEffect } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import Input from "./Input";
import { ItemGrid, DeleteButton, ItemTotal } from "./styles/Item.styles";

interface ItemProps {
  index: number;
  item: InvoiceItem;
  remove: (index: number) => void;
}

const Item = ({ index, item, remove }: ItemProps) => {
  const { values, setFieldValue } = useFormikContext<Invoice>();
  const items = values.items;

  const getInvoiceTotal = () => {
    const allTotals = items.reduce((acc, curr) => acc + curr.total, 0);

    setFieldValue("total", parseFloat(allTotals.toFixed(2)));
  };

  useEffect(() => {
    const itemTotal = parseFloat((item.quantity * item.price).toFixed(2));

    setFieldValue(`items[${index}].total`, itemTotal);
  }, [items[index].quantity, items[index].price]);

  useEffect(() => {
    getInvoiceTotal();
  }, [items[index].total]);

  return (
    <ItemGrid>
      <Input name={`items[${index}].name`} type="text" label="Item Name" />
      <Input
        name={`items[${index}].quantity`}
        type="number"
        label="Qty"
        step="1"
      />
      <Input
        name={`items[${index}].price`}
        type="number"
        label="Price"
        step="0.01"
      />
      <ItemTotal>
        <span className="total-label">Total</span>
        <span className="amount">{item.total.toFixed(2)}</span>
      </ItemTotal>
      <DeleteButton type="button" onClick={() => remove(index)}>
        <DeleteIcon />
      </DeleteButton>
    </ItemGrid>
  );
};

export default Item;
