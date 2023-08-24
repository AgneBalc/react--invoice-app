import { styled } from "styled-components";

const StyledButton = styled.button`
  border-radius: 24px;
  padding: 18px 24px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &.new {
    background-color: var(--purple-primary);

    &:hover {
      background-color: var(--purple-primary--light);
    }
  }

  &.new-item,
  &.discard {
    background-color: #f9fafe;
    color: var(--blue-medium);

    &:hover {
      background-color: #dfe3fa;
    }
  }

  &.delete {
    background-color: var(--red);

    &:hover {
      background-color: var(--red-light);
    }
  }

  &.paid,
  &.save {
    background-color: var(--purple-primary);

    &:hover {
      background-color: var(--purple-primary-light);
    }
  }

  &.edit,
  &.cancel {
    background-color: ${(props) => props.theme.editBtnBg};
    color: ${(props) => props.theme.innerText};

    &:hover {
      background-color: ${(props) => props.theme.editBtnHover};
    }
  }

  &.save-draft {
    background-color: #373b53;
    color: ${(props) => props.theme.text};

    &:hover {
      background-color: ${(props) => props.theme.saveDraftHover};
    }
  }
`;

export default StyledButton;
