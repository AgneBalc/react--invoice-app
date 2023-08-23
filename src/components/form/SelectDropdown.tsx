import { useFormikContext } from "formik";
import { Invoice } from "../../types";
import { paymentTermsOptions } from "../../utils/helpers";
import { ReactComponent as IconDown } from "../../assets/icon-arrow-down.svg";
import { useState } from "react";

const SelectDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const {
    values: { paymentTerms },
    setFieldValue,
  } = useFormikContext<Invoice>();

  const selectedValue = paymentTermsOptions.find(
    (option) => option.value === paymentTerms
  );

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelect = (value: number) => {
    setFieldValue("paymentTerms", value);
    setShowOptions(false);
  };

  return (
    <div>
      <label htmlFor="paymentTerms">Payment Terms</label>
      <div onClick={handleToggleOptions}>
        <input
          type="text"
          id="paymentTerms"
          value={selectedValue?.text}
          readOnly
        />
        <IconDown />
      </div>
      {showOptions && (
        <div>
          <ul>
            {paymentTermsOptions.map((option) => (
              <li key={option.value} onClick={() => handleSelect(option.value)}>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
