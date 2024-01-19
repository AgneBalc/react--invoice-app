import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
};

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      font-family: 'League Spartan', sans-serif;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      }

    body {
        background: ${(props) => props.theme.body.bg};
        color:${(props) => props.theme.body.color};
    }

main {
  width: 100%;
  padding: 32px 24px;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 672px;
    padding-top: 61px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 730px;
    padding-top: 78px;
  }
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
`;
