import { InputLabel, TextInput } from "./styles/Input.styles";
import { getIn, useFormikContext } from "formik";
import { Invoice } from "../../utils/types";

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  step?: string;
}

const Input = ({ type, label, name, placeholder, step }: InputProps) => {
  const { getFieldProps, errors, submitCount } = useFormikContext<Invoice>();

  const errorMessage = getIn(errors, name) as string | undefined;

  return (
    <div>
      <InputLabel htmlFor={name} error={errors} submitCount={submitCount}>
        {label}
        {errorMessage && submitCount > 0 && <span>{errorMessage}</span>}
      </InputLabel>
      <TextInput
        type={type}
        id={name}
        placeholder={placeholder}
        step={step}
        error={errors}
        submitCount={submitCount}
        {...getFieldProps(name)}
      />
    </div>
  );
};

export default Input;
