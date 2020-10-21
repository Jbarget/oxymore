import React from "react";
import styled from "styled-components";
import {
  FlexboxProps,
  flexbox,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  GridProps,
  grid,
} from "styled-system";
import bag from "../assets/conscious-shopping/bag.jpg";
import shell from "../assets/project-page/shell.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
import concha from "../assets/conscious-shopping/concha.jpg";
import Timer from "../Timer";
import { zIndexes } from "../theme";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100%;
  ${flexbox}
`;

const Container = styled.div<FlexboxProps & LayoutProps & PositionProps & SpaceProps & GridProps>`
  display: flex;
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${grid};
`;

const ProjectIconShell = styled.img<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const Illustration = styled.img<LayoutProps & FlexboxProps & PositionProps & GridProps>`
  ${layout};
  ${flexbox};
  ${position};
  ${grid};
  opacity: 0.5;
`;


const ConsciousShopping = () => {
  return (
    <Main justifyContent="center" alignItems="center">
     <Container gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(5, 20%)"
        display={["flex", "flex", "flex", "grid"]}
        flexDirection={["column", "column", "column", "row"]}
        height="100%"
        alignItems="center"
        >
    <ProjectIconShell alt="icon image" src={shell} maxWidth="20%" gridColumn={1} gridRow={1} /> 
      <Illustration alt="illustration image" src={boots} maxWidth="50%"  gridColumn={1} gridRow={2} justifySelf="flex-end" alignSelf="center"/> 
    <Illustration alt="illustration image" src={bag} maxWidth="50%" gridColumn={2} justifySelf="center" alignSelf="center"/> 
    <Container  zIndex={zIndexes.inFront} gridColumn={2} gridRow="2/4" justifySelf="center" alignSelf="center">
      <Timer endDate="2020-11-20"/> 
      </Container>
      <Illustration alt="illustration image" src={concha} maxWidth="50%" gridColumn={2} gridRow={4} justifySelf="flex-start" alignSelf="center"/> 
      <Illustration  alt="illustration image" src={trex} maxWidth="50%" gridColumn={2} gridRow={4} justifySelf="flex-end" alignSelf="center"/>
      <Illustration alt="illustration image" src={sunglasses} maxWidth="50%"  gridColumn={3} gridRow={2} alignSelf="center"/> 
     </Container>
    </Main>
  );
};

export default ConsciousShopping;

