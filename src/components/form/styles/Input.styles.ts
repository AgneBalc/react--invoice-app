import { FormikErrors } from "formik";
import { styled } from "styled-components";
import { Invoice } from "../../../utils/types";

interface InputLabelProps {
  error: FormikErrors<Invoice>;
  submitCount: number;
}

const InputLabel = styled.label<InputLabelProps>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-family: Spartan, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme, error, submitCount }) =>
    error && submitCount > 0
      ? theme.textField.label.error.color
      : theme.textField.label.color};
  line-height: 1;
  margin-bottom: 0.625rem;
  span {
    font-size: 0.625rem;
    margin-left: auto;
  }
`;

const TextInput = styled.input<InputLabelProps>`
  width: 100%;
  height: 3rem;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme }) => theme.textField.bg};
  border-color: ${({ theme, error, submitCount }) =>
    error && submitCount > 0
      ? theme.textField.error.borderColor
      : theme.textField.borderColor};
  border-radius: 0.25rem;
  padding: 0.9375rem 1.25rem;
  font-family: Spartan, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  letter-spacing: -0.25px;
  &:focus {
    outline: none;
    border-color: ${({ theme, error, submitCount }) =>
      error && submitCount > 0
        ? theme.textField.error.borderColor
        : theme.textField.focus.borderColor};
  }
  &:placeholder {
    color: rgba(12, 14, 22, 0.4);
  }
`;

export { InputLabel, TextInput };
