import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "helvetica neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }

`;
export default GlobalStyle;
