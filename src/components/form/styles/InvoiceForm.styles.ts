import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import Input from "../Input";

const FieldSet = styled.fieldset`
  border: none;
  margin-bottom: 1rem;
`;

const Legend = styled.legend`
  display: block;
  margin-bottom: 1.5rem;
  font-family: Spartan, sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.form.legend.color};
  letter-spacing: -0.25px;
`;

const AddressFieldsGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 24px;
  div:last-child {
    grid-column: 1/3;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    div:last-child {
      grid-column: auto;
    }
  }
`;

const InvoiceDatesGrid = styled.div`
  margin-top: 1.5rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 24px;
    align-items: flex-end;
    div:last-child {
      grid-column: 1/3;
    }
  }
`;

const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  .discard {
    margin-right: auto;
  }
`;

const FormTextField = styled(Input)`
  margin-bottom: 1.5rem;
`;

export {
  FieldSet,
  Legend,
  AddressFieldsGrid,
  InvoiceDatesGrid,
  FormBottom,
  FormTextField,
};
