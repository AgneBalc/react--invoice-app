import {
  DropdownContainer,
  DropdownLabel,
  DropdownInputWrapper,
  OptionsContainer,
  Option,
} from "./styles/SelectDropdown.styles";
import { useFormikContext } from "formik";
import { Invoice } from "../../utils/types";
import { paymentTermsOptions } from "../../utils/helpers";
import IconDown from "../../assets/icon-arrow-down.svg";
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
    <DropdownContainer>
      <DropdownLabel htmlFor="paymentTerms">Payment Terms</DropdownLabel>
      <DropdownInputWrapper
        onClick={handleToggleOptions}
        showOptions={showOptions}
      >
        <input
          type="text"
          id="paymentTerms"
          value={selectedValue?.text}
          readOnly
        />
        <img src={IconDown} alt="Arrow down icon" />
      </DropdownInputWrapper>
      {showOptions && (
        <OptionsContainer>
          {paymentTermsOptions.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.text}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default SelectDropdown;
