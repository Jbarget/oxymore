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
    scrollbar-color: ${theme.colors.copyTwo} transparent;
   
    &::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-color: ${theme.colors.copyTwo};
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
    color: ${theme.colors.copyOne};
    background-color: ${theme.colors.copyTwo};
  }
  #root {
    display: flex;
    flex-direction: column;
    flex: auto;
  }
  button {
    cursor: pointer;
    color: ${theme.colors.copyOne};
    outline: none;
    font-family: ${theme.fonts.primary};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  a {
    text-decoration: none;
    color: ${theme.colors.copyOne};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
export default GlobalStyle;
