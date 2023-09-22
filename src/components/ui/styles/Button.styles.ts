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

// const StyledButton = styled.button`
//   border-radius: 24px;
//   padding: 18px 24px 15px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   border: none;

//   &.new {
//     background-color: var(--purple-primary);
//     padding: 8px 17px 8px 8px;
//     gap: 16px;

//     .icon-plus {
//       width: 32px;
//       height: 32px;
//       background-color: #fff;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       border-radius: 50%;
//     }

//     &:hover {
//       background-color: var(--purple-primary-light);
//     }
//   }

//   &.new-item,
//   &.discard {
//     background-color: #f9fafe;
//     color: var(--blue-medium);

//     &:hover {
//       background-color: #dfe3fa;
//     }
//   }

//   &.delete {
//     background-color: var(--red);

//     &:hover {
//       background-color: var(--red-light);
//     }
//   }

//   &.paid,
//   &.save {
//     background-color: var(--purple-primary);

//     &:hover {
//       background-color: var(--purple-primary-light);
//     }
//   }

//   &.edit,
//   &.cancel {
//     background-color: ${(props) => props.theme.editBtnBg};
//     color: ${(props) => props.theme.innerText};

//     &:hover {
//       background-color: ${(props) => props.theme.editBtnHover};
//     }
//   }

//   &.save-draft {
//     background-color: #373b53;
//     color: ${(props) => props.theme.text};

//     &:hover {
//       background-color: ${(props) => props.theme.saveDraftHover};
//     }
//   }
// `;

// export default StyledButton;
