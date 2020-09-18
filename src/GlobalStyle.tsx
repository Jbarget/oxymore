import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 100%;
    font-family: "Helvetica Neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background: ${theme.colors.black};
  }
  #root {
    height: 100%;
  }
  button {
    cursor: pointer;
    color: ${theme.colors.athensGray};
    outline: none; 
    font-family: "Helvetica Neue";
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }
`;
export default GlobalStyle;
