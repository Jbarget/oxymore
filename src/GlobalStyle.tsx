import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";
import mainBackground from "./components/assets/backgrounds/background.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 100%;
    font-family: "Helvetica Neue", Sans-Serif;
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background-image: url(${mainBackground});
    background-repeat: no-repeat;
    background-size: cover;
    padding: ${theme.space[6]}px;
  }
  #root {
    height: 100%;
  }
  button {
    cursor: pointer;
    color: ${theme.colors.athensGray};
    outline: none; 
    font-family: "Helvetica Neue", Sans-Serif;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }
`;
export default GlobalStyle;
