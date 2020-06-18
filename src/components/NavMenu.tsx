import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const MenuButton = styled.button<HeadingProps>`
${color}
${space}
${typography}`;

const visibleStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  font-size: 36px;
  justify-content: center;
  text-align: center;
`;
const NavMenuOverlay = styled.dialog<{ expanded: boolean }>`
  display: none;
  ${(props) => props.expanded && visibleStyles}
`;

const NavMenu = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Fragment>
      <MenuButton onClick={() => setExpanded(!expanded)}>click me</MenuButton>
      <NavMenuOverlay expanded={expanded}>
        <NavLink to="/manifesto">MANIFESTO</NavLink>

        <NavLink to="/advertising">ADVERTISING</NavLink>

        <NavLink to="/about-us">ABOUT US</NavLink>

        <NavLink to="/contact">CONTACT</NavLink>

        <NavLink to="/buy">BUY</NavLink>
      </NavMenuOverlay>
    </Fragment>
  );
};

export default NavMenu;
