import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

const DetailsCard = styled.section`
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text.color2};
  line-height: 1.6;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  margin-bottom: 2.8125rem;
`;

const DetailsCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nameid nameid"
    "senderaddress senderaddress"
    "invoicedates clientnameaddress"
    "clientemail clientemail";
  gap: 30px 20px;
  margin-bottom: 2.5rem;

  .invoice-id-name {
    grid-area: nameid;

    > p {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${({ theme }) => theme.text.h1};
      letter-spacing: -0.23px;
      margin-bottom: 0.25rem;

      &::before {
        content: "#";
        color: #7e88c3;
      }

      @media screen and (min-width: ${breakpoints.tablet}) {
        font-size: 1rem;
      }
    }

    > h1 {
      font-size: 0.75rem;
      font-weight: 500;
      margin: 0.25rem 0;
    }
  }

  .sender-address {
    grid-area: senderaddress;
  }

  .invoice-dates {
    grid-area: invoicedates;
  }

  .client-email {
    grid-area: clientemail;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "nameid nameid senderaddress"
      "invoicedates clientnameaddress clientemail";
  }
`;

const AddressContainer = styled.address`
  font-size: 0.6875rem;
  font-style: normal;
  letter-spacing: -0.25px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    text-align: right;
  }
`;

const InvoiceDetails = styled.div`
  h2 {
    font-size: 0.75rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9375rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text.h1};
    margin: 0 0 0.375rem 0;
  }

  address {
    font-size: 0.6875rem;
    letter-spacing: -0.23px;
    font-style: normal;
  }
`;

export { DetailsCard, DetailsCardGrid, AddressContainer, InvoiceDetails };
