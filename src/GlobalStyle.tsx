import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "helvetica neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background: ${theme.colors.black};
  }
  button {
    cursor: pointer;
    color: ${theme.colors.athensGray};
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }
`;
export default GlobalStyle;
