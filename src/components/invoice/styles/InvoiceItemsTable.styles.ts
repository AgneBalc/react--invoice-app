import { styled } from "styled-components";

const ItemsTable = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.invoiceTable.bg};
  border-radius: 0.5rem;
  overflow: hidden;
  border-collapse: collapse;

  thead {
    display: none;

    @media screen and (min-width: 576px) {
      display: table-header-group;
    }
  }
`;

const TableHead = styled.th`
  @media screen and (min-width: 576px) {
    padding: 2rem;
    color: ${({ theme }) => theme.invoiceTable.heading};
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: -0.23px;
  }
`;

const ItemNameHead = styled(TableHead)`
  @media screen and (min-width: 576px) {
    text-align: left;
  }
`;

const ItemQtyHead = styled(TableHead)`
  @media screen and (min-width: 576px) {
    text-align: center;
  }
`;

const ItemPriceHead = styled(TableHead)`
  @media screen and (min-width: 576px) {
    text-align: right;
  }
`;

const ItemTotalHead = styled(TableHead)`
  @media screen and (min-width: 576px) {
    text-align: right;
  }
`;

const Body = styled.tbody`
  tr td {
    padding: 0 1.5rem 1.5rem 1.5rem;

    @media screen and (min-width: 576px) {
      padding: 0 2rem 2rem 2rem;
      font-weight: 700;
      font-size: 0.75rem;
    }
  }

  tr:first-child td {
    padding-top: 1.5rem;
  }
`;

const ItemNameCol = styled.td`
  text-align: left;

  p {
    font-size: 0.75rem;
    font-weight: 700;

    &:first-child {
      color: ${({ theme }) => theme.text.h1};
      letter-spacing: -0.23px;
    }

    &:last-child {
      color: ${({ theme }) => theme.invoiceTable.heading};
      text-align: left;
    }
  }

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const ItemName = styled.td`
  display: none;

  @media screen and (min-width: 576px) {
    display: table-cell;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.23px;
    color: ${({ theme }) => theme.text.h1};
    margin-bottom: 0.3125rem;
  }
`;

const ItemQty = styled.td`
  display: none;
  @media screen and (min-width: 576px) {
    display: table-cell;
    text-align: center;
  }
`;

const ItemQtyPrice = styled.td`
  display: none;

  @media screen and (min-width: 576px) {
    display: table-cell;
    text-align: right;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.invoiceTable.heading};
  }
`;

const ItemTotalCol = styled.td`
  font-size: 0.75rem;
  font-weight: 700;
  text-align: right;
  color: ${({ theme }) => theme.text.h1};
`;

const Footer = styled.tfoot`
  background-color: ${({ theme }) => theme.invoiceTable.footer.bg};
  color: ${({ theme }) => theme.invoiceTable.footer.color};

  tr td {
    padding: 1.5rem;

    @media screen and (min-width: 576px) {
      padding: 1.5rem 2rem;
    }
  }
`;

const TotalLabel = styled.td`
  font-size: 0.6875rem;
  font-weight: 500;
  text-align: left;
`;

const InvoiceTotal = styled.td`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.42px;
  text-align: right;
`;

export {
  ItemsTable,
  Body,
  ItemName,
  ItemQtyPrice,
  ItemTotalCol,
  Footer,
  TotalLabel,
  InvoiceTotal,
  ItemNameHead,
  ItemQtyHead,
  ItemPriceHead,
  ItemTotalHead,
  ItemQty,
  ItemNameCol,
};
