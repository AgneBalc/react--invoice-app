import React from "react";
import StyledButton from "./styles/Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
