import { styled } from "styled-components";

interface DropdownInputProps {
  showOptions: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const DropdownLabel = styled.label`
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: -0.25px;
  display: block;
  color: ${({ theme }) => theme.datePicker.label.color};
  margin-bottom: 0.75rem;
`;

const DropdownInputWrapper = styled.div<DropdownInputProps>`
  position: relative;

  input {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    font-weight: bold;
    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme.textField.borderColor};
    background-color: ${({ theme }) => theme.textField.bg};
    color: ${({ theme }) => theme.text.h1};
    cursor: pointer;

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.textField.focus.borderColor};
    }
  }

  img {
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 5.5%;
    transform: translateY(-50%);
    transform-origin: center;
    transform: ${({ showOptions }) =>
      showOptions ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 110%;
  width: 100%;
  box-shadow: 0 10px 20px ${({ theme }) => theme.selectDropdown.boxShadow};
  background-color: ${({ theme }) => theme.datePicker.bg};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Option = styled.div`
  z-index: 2;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: -0.25px;
  padding: 1rem 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.selectDropdown.borderColor};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.button.primary.bg};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export {
  DropdownContainer,
  DropdownLabel,
  DropdownInputWrapper,
  OptionsContainer,
  Option,
};
