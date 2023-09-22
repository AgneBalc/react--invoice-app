import { styled } from "styled-components";

const FormHeading = styled.h1`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 3rem;
  span {
    &:before {
      content: "#";
      color: #888eb0;
    }
  }
`;

export default FormHeading;
