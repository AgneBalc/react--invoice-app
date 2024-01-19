import styled from "styled-components";
import { InvoiceStatus } from "../../../utils/types";

interface InvoiceStatusProps {
  status: InvoiceStatus;
}

export const InvoiceStatusContainer = styled.div<InvoiceStatusProps>`
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

export const InvoiceStatusText = styled.div<InvoiceStatusProps>`
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
