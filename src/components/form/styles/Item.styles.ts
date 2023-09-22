import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 20px;
  gap: 24px 16px;
  align-items: center;
  margin-bottom: 3rem;
  div:first-child {
    grid-column: 1/5;
  }
  div:nth-child(2) input {
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
    text-align: center;
  }
  label span {
    display: none;
  }
  input {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 50px 100px 70px 20px;
    margin-bottom: 1.125rem;
    div:first-child {
      grid-column: auto;
    }
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  margin-top: 0.9375rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.invoiceItemsList.deleteButton.color};
  &:hover {
    color: ${({ theme }) => theme.invoiceItemsList.deleteButton.hover.color};
  }
`;

const ItemTotal = styled.div`
  white-space: nowrap;
  overflow: auto;
  .total-label {
    display: block;
    font-family: Spartan, sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.invoiceItemsList.label.color};
    margin-bottom: 0.625rem;
  }
  .amount {
    display: inline-block;
    height: 3rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.invoiceItemsList.total};
    letter-spacing: -0.25px;
    line-height: 48px;
  }
`;

export { ItemGrid, DeleteButton, ItemTotal };
