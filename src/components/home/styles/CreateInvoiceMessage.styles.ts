import { styled } from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

const Wrapper = styled.section`
  display: block;
  padding: 6.375rem 0;
  max-width: 13.125rem;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 15.625rem;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.63px;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  margin: 0 auto;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.color1};
`;

export { Wrapper, Image, Heading, Body };
