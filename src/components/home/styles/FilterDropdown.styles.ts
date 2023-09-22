import { styled } from "styled-components";
import Button from "../../ui/Button";
import IconDown from "../../../assets/icon-arrow-down.svg";
import IconCheck from "../../../assets/icon-check.svg";

interface DropDownButtonProps {
  showFilter: boolean;
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropDownButton = styled(Button)<DropDownButtonProps>`
  display: block;
  width: 11.875rem;
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  letter-spacing: -0.25px;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.text.h1};
  }

  &::after {
    content: "";
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: url(${IconDown}) no-repeat center;
    transform-origin: center;
    transform: ${({ showFilter }) =>
      showFilter ? "rotate(180deg)" : "rotate(0deg)"};
    margin-left: 1rem;
  }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.filterDropdown.dropdown.bg};
  width: 12rem;
  padding: 1.5rem;
  margin-top: 1.4375rem;
  z-index: 10;

  label:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CustomCheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    &:checked + span::before {
      background: ${({ theme }) => theme.customRadio.checked.bg}
        url(${IconCheck}) no-repeat 40% 40%;
    }

    &:focus + span::before {
      background-color: ${({ theme }) => theme.customRadio.hover.borderColor};
    }
  }

  span {
    padding-left: 1.8125rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.25px;
    text-transform: capitalize;

    &::before {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid ${({ theme }) => theme.customRadio.borderColor};
      background-color: ${({ theme }) => theme.customRadio.bg};
      border-radius: 0.125rem;
      position: absolute;
      top: -2px;
      left: 0;
    }

    &:hover::before {
      border-color: ${({ theme }) => theme.customRadio.hover.borderColor};
    }
  }
`;

export { DropDownButton, Wrapper, DropdownWrapper, CustomCheckboxLabel };
