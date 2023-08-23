import { FormikProps, getIn } from "formik";
import { Invoice } from "../../types";

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  formik: FormikProps<Invoice>;
}

const Input = ({ type, label, formik, name, placeholder }: InputProps) => {
  const errorMessage = getIn(formik.errors, name) as string | undefined;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {errorMessage && formik.submitCount > 0 && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
