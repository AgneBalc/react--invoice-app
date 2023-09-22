import { styled } from "styled-components";

const DatePickerContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const DateLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.datePicker.label.color};
  margin-bottom: 0.75rem;
`;

const InputWrapper = styled.div`
  position: relative;

  input[type="text"] {
    height: 3rem;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme.textField.borderColor};
    background-color: ${({ theme }) => theme.textField.bg};
    color: ${({ theme }) => theme.text.h1};
    padding: 0 1rem;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;

    &:focus {
      border: 1px solid ${({ theme }) => theme.textField.focus.borderColor};
      outline: none;
    }
  }

  .calendarIcon {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    background: transparent;
    border: none;
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 105%;
  left: 0;
  max-width: 240px;
  width: 100%;
  background-color: ${({ theme }) => theme.datePicker.bg};
  min-height: 243px;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  z-index: 4;
  box-shadow: 0 10px 20px ${({ theme }) => theme.selectDropdown.boxShadow};
`;

const CalendarButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;
    font-weight: bold;
  }
  button {
    padding: 0.5rem;
    border: none;
    background: none;
  }
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 1rem;
  font-weight: bold;

  p {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.datePicker.selectedBg};
    }
  }

  .selectedDay {
    color: ${({ theme }) => theme.datePicker.selectedBg};
  }
`;

export {
  DatePickerContainer,
  InputWrapper,
  DateLabel,
  CalendarContainer,
  CalendarButtons,
  Days,
};
