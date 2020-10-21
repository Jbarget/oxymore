import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: SangBleu;
  src: url(SangBleuOGSerif-Light.otf)
}
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 100%;
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    color: ${theme.colors.athensGray};
    padding: ${theme.space[6]}px;
  }
  #root {
    height: 100%;
  }
  button {
    cursor: pointer;
    color: ${theme.colors.athensGray};
    outline: none;
    font-family: ${theme.fonts.primary};
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }
`;
export default GlobalStyle;
