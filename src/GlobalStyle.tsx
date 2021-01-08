import { createGlobalStyle } from "styled-components";
import theme from "./components/theme";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: SangBleu OG Serif;
    src: url(../fonts/SangBleuOGSerif-Light.otf)
  }
  @font-face{
    font-family: Favorit;
    src: url(../fonts/Favorit_Regular.ttf)
  }
  * {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.athensGray} transparent;
   
    &::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-color: ${theme.colors.athensGray};
    }
  }
  html {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: auto;    
  }
  body {
    display: flex;
    flex-direction: column;
    flex: auto;
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background-color: ${theme.colors.black};
  }
  #root {
    display: flex;
    flex-direction: column;
    flex: auto;
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
