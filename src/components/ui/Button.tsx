import React from "react";
import { IconButton, IconWrapper, TextButton } from "./styles/Button.styles";
import IconPlus from "../../assets/icon-plus.svg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant: string;
  icon?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: ButtonProps) => {
  return icon ? (
    <IconButton className={className} variant={variant} {...props}>
      <IconWrapper>
        <img src={IconPlus} alt="" />
      </IconWrapper>
      {children}
    </IconButton>
  ) : (
    <TextButton className={className} variant={variant} {...props}>
      {children}
    </TextButton>
  );
};

export default Button;
