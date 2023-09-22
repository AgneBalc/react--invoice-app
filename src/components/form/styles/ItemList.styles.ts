import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import Button from "../../ui/Button";

const Wrapper = styled.div`
  margin-top: 0.5rem;

  & > span {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1;
    color: #777f98;
    margin-bottom: 1.5rem;
  }

  .error {
    font-size: 0.625rem;
    font-weight: 600;
    color: ${({ theme }) => theme.invoiceItemsList.label.error.color};
    display: block;
    margin-top: 2rem;
  }
`;

const AddNewItemButton = styled(Button)`
  display: block;
  width: 100%;
`;

export { Wrapper, AddNewItemButton };
