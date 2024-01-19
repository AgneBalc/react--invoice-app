import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

const Wrapper = styled(Link)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.invoiceItem.bg};
  color: ${({ theme }) => theme.invoiceItem.color};
  border-radius: 0.5rem;
  padding: 4rem 1.5rem 1.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.invoiceItem.borderColor};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    border-color: ${({ theme }) => theme.invoiceItem.hover.borderColor};
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 103px 151px 110px 142px 144px 26px;
    padding: 1.5rem;
    align-items: center;
  }
`;

const InvoiceID = styled.span`
  display: block;
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.invoiceItem.id};
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  &:before {
    content: "#";
    color: #7e88c3;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    position: static;
  }
`;

const ClientName = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: right;
  margin-bottom: 1.5rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    text-align: left;
    position: static;
  }
`;

const DueDate = styled(ClientName)`
  position: static;
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  grid-column: 1/3;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    grid-column: auto;
  }
`;

const Amount = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.invoiceItem.total};

  @media screen and (min-width: ${breakpoints.tablet}) {
    text-align: right;
  }
`;

const ArrowIcon = styled.div`
  display: none;
  text-align: right;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export { ArrowIcon, Amount, DueDate, ClientName, InvoiceID, Wrapper };
