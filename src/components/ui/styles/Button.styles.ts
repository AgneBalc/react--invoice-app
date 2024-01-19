import { styled } from "styled-components";
import { ButtonProps } from "../Button";

const ButtonBase = styled.button<ButtonProps>`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 1;
  border-radius: 6.25rem;
  border: none;
  user-select: none;
  background-color: ${({ variant, theme }) => theme.button[variant].bg};
  color: ${({ variant, theme }) => theme.button[variant].color};
  &:hover {
    background-color: ${({ variant, theme }) => theme.button[variant].hover.bg};
    color: ${({ variant, theme }) => theme.button[variant].hover.color};
  }
`;

const TextButton = styled(ButtonBase)`
  padding: 1rem 1.125rem;
`;

const IconButton = styled(ButtonBase)`
  position: relative;
  padding: 1rem 1rem 1rem 3.5rem;
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background-color: #ffffff;
  border-radius: 50%;
`;

export { TextButton, IconButton, IconWrapper };
