import { FormikProps } from "formik";
import { Invoice } from "../../types";
import { paymentTermsOptions } from "../utils/utils";
import { ReactComponent as IconDown } from "../../assets/icon-arrow-down.svg";
import { useState } from "react";

interface SelectDropdownProps {
  formik: FormikProps<Invoice>;
}

const SelectDropdown = ({ formik }: SelectDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const selectedValue = paymentTermsOptions.find(
    (option) => option.value === formik.values.paymentTerms
  );

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelect = (value: number) => {
    formik.setFieldValue("paymentTerms", value);
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
