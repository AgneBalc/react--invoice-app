import { Link } from "react-router-dom";
import { styled } from "styled-components";

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 2rem;

  img {
    margin-right: 1.4375rem;
  }
`;

export { BackButton };
