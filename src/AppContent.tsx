import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "./components/theme";

interface PageProps {
    url: string[];
  }

const pages: PageProps[] = [
    {
      url: [
      "/", 
      "/projects", 
      "/advertising", 
      "/about", 
      "/contact", 
      "/buy"
     ]
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
     ]
    },
  ];

  const marbleBackground = css`
  background-image: url(${theme.backgrounds.marble}); 
  background-repeat: repeat-y;
  background-size: cover;
`;

  const blackBackground = css`
  background-color: ${theme.colors.black};
`;

  const GetBackground = () => {
    const location = useLocation();
    pages.forEach((page) => {
      if (location.pathname.includes(`${page.url}/projects`)) {
        return blackBackground;
      } else {
          return marbleBackground;
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