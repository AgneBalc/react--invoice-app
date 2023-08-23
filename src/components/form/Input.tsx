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
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        step={step}
        {...getFieldProps(name)}
      />
      {errorMessage && submitCount > 0 && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
