import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
};

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'League Spartan', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    overflow-y: scroll;
    overflow-x: hidden;
    /* transition: all 0.3s ease-in; */
  }

  main {
    max-width: 730px;
    margin: auto;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    color: ${(props) => props.theme.textBold};
  }

  h1 {
    font-size: 36px;
    letter-spacing: -1.125px;
    line-height: 33px;
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.75px;
    line-height: 22px;
  }

  h3 {
    font-size: 15px;
    letter-spacing: -0.25px;
    line-height: 24px;
  }

  h4 {
    font-size: 15px;
    letter-spacing: -0.25px;
    line-height: 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
   cursor: pointer;
  }

  img {
      max-width: 100%;
   }

  fieldset {
    border: none;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
