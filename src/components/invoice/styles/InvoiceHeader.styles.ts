import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import { InvoiceStatus } from "../../../utils/types";

interface InvoiceStatusProps {
  status: InvoiceStatus;
}

const InvoiceHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  @media screen and (min-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
    gap: 16px;
  }
`;

const StatusLabel = styled.p`
  font-size: 0.75rem;
  color: #858bb2;
  font-weight: 500;
`;

const InvoiceActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  padding: 1.3125rem 1.5rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: static;
    margin-left: auto;
    padding: 0;
  }
`;

const InvoiceStatusContainer = styled.div<InvoiceStatusProps>`
  text-align: right;

  & > div {
    display: inline-flex;
    position: relative;
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    z-index: 1;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      inset: 0;
      border-radius: 0.375rem;
      background-color: ${({ theme, status }) => theme.status[status]};
      opacity: 0.05;
    }
  }
`;

const InvoiceStatusText = styled.div<InvoiceStatusProps>`
  margin: auto;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme, status }) => theme.status[status]};
  letter-spacing: -0.25px;
  text-transform: capitalize;

  &::before {
    content: "";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, status }) => theme.status[status]};
    margin-right: 0.5rem;
  }
`;

export {
  InvoiceHeaderWrapper,
  StatusLabel,
  InvoiceActions,
  InvoiceStatusContainer,
  InvoiceStatusText,
};
