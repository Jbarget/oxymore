import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { background } from "styled-system";
import theme from "./components/theme";

interface PageProps {
    url: string[];
    background: any;
  }

const marbleBackground = css`
background-image: url(${theme.backgrounds.marble}); 
background-repeat: repeat-y;
background-size: cover;
`;

const blackBackground = css`
background-color: ${theme.colors.black};
`;


const pages: PageProps[] = [
    {
      url: [
      "/", 
      "/projects", 
      "/advertising", 
      "/about", 
      "/contact", 
      "/buy"
     ], 
     background: marbleBackground
    },
    {
    url: [
    "/projects/consciousshopping", 
    "/projects/fashioneditorial", 
    "/projects/kailandre", 
    "/projects/eroticstories", 
    "/projects/eyes", 
    "/projects/themap", 
    "/projects/belledejour", 
    "/projects/leoadef"
     ], 
     background: blackBackground
    },
  ];

 

  const GetBackground = () => {
    const background = pages[0].background;
    const location = useLocation();
    pages.forEach((page) => {
      if (page.url.includes(location.pathname)) {
        return background;
      }
    });
  };

  const App = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppContent = () => {
    return (
      <Fragment>
      <App/>
   </Fragment>
    );
  };
  
  export default AppContent;