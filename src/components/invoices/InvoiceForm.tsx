import { formatDate } from "../utils/utils";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";

const InvoiceForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Bill From</legend>
        <div>
          <label htmlFor="sender-street">Street Address</label>
          <input type="text" name="sender-street" id="sender-street" />
        </div>
        <div>
          <div>
            <label htmlFor="sender-city">City</label>
            <input type="text" name="sender-city" id="sender-city" />
          </div>
          <div>
            <label htmlFor="sender-postal">Postal Code</label>
            <input type="text" name="sender-postal" id="sender-postal" />
          </div>
          <div>
            <label htmlFor="sender-country">Country</label>
            <input type="text" name="sender-country" id="sender-country" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Bill To</legend>
        <div>
          <label htmlFor="client-name">Client's Name</label>
          <input type="text" name="client-name" id="client-name" />
        </div>
        <div>
          <label htmlFor="client-email">Client's Email</label>
          <input
            type="email"
            name="client-email"
            id="client-email"
            placeholder="e.g. email@example.com"
          />
        </div>
        <div>
          <label htmlFor="client-street">Street Address</label>
          <input type="text" name="client-street" id="client-street" />
        </div>
        <div>
          <div>
            <label htmlFor="client-city">City</label>
            <input type="text" name="client-city" id="client-city" />
          </div>
          <div>
            <label htmlFor="client-postal">Postal Code</label>
            <input type="text" name="client-postal" id="client-postal" />
          </div>
          <div>
            <label htmlFor="client-country">Country</label>
            <input type="text" name="client-country" id="client-country" />
          </div>
        </div>
      </fieldset>
      <div>
        <div>
          <div>
            <label htmlFor="created-date">Invoice Date</label>
            <input type="date" name="created-date" id="created-date" />
          </div>
          <div>
            <label htmlFor="payment-date">Payment Terms</label>
            <input type="date" name="payment-date" id="payment-date" />
          </div>
        </div>
        <div>
          <label htmlFor="description">Project Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="e.g. Graphic Design Service"
          />
        </div>
      </div>
      <div>
        <h3>Items List</h3>
        <div>
          <div className="item-name">
            <label htmlFor="item-name">Item Name</label>
            <input
              type="text"
              name="item-name"
              id="item-name"
              placeholder="Item name"
            />
          </div>
          <div className="item-qty">
            <label htmlFor="item-qty">Qty</label>
            <input
              type="number"
              name="item-qty"
              id="item-qty"
              min="0"
              step="1"
            />
          </div>
          <div className="item-price">
            <label htmlFor="item-price">Price</label>
            <input
              type="number"
              name="item-price"
              id="item-price"
              min="0"
              step="0.01"
            />
          </div>
          <div className="item-total">
            <label htmlFor="item-total">Total</label>
            <input
              type="number"
              name="item-total"
              id="item-total"
              readOnly={true}
            />
          </div>
        </div>
        <button type="button">
          <PlusIcon />
          <span>Add New Item</span>
        </button>
      </div>
      <div className="form-buttons">
        <button type="button">Discard</button>
        <button type="button">Save as Draft</button>
        <button type="submit">Save & Send</button>
      </div>
    </form>
  );
};

export default InvoiceForm;
