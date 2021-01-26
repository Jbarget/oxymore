import {
  GridProps,
  SpaceProps,
  TypographyProps,
  typography,
} from "styled-system";
import { NavLink, useLocation } from "react-router-dom";

import Flex from "./Flex";
import { HOME_URL } from "../constants/router-urls";
import LanguageButtons from "./LanguageButtons";
import NavMenu from "./NavMenu";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1<SpaceProps & TypographyProps & GridProps>`
  ${typography};
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.01);
    color: white;
  }
`;

const HeaderLogo = () => {
  const fontSizes = [1, 2, 3, 4];

  return (
    <NavLink to={HOME_URL}>
      <H1 fontSize={fontSizes}>OXYMORE</H1>
    </NavLink>
  );
};

const Header = () => {
  const location = useLocation();

  if (location.pathname === `${HOME_URL}`) {
    return null;
  }

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      pb={6}
    >
      <HeaderLogo />
      <Flex>
        <LanguageButtons />
        <NavMenu />
      </Flex>
    </Flex>
  );
};

export default Header;
