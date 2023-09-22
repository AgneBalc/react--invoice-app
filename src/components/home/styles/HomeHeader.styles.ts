import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import Button from "../../ui/Button";

const HomeHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  & > div:first-child {
    margin-right: auto;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-bottom: 4.0625rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.4375rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const InvoicesCount = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.text.color1};
  letter-spacing: -0.25px;
`;

const NewInvoiceButton = styled(Button)`
  span {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    span {
      display: revert;
    }
  }
`;

export { HomeHeaderContainer, Heading, NewInvoiceButton, InvoicesCount };
