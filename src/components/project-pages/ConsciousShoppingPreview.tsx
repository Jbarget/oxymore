import React from "react";
import styled from "styled-components";
import {
  FlexboxProps,
  flexbox,
  layout,
  LayoutProps,
  PositionProps,
  GridProps,
  grid,
} from "styled-system";
import bag from "../assets/conscious-shopping/bag.jpg";
import projectIcon from "../assets/project-page/shell.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
import shell from "../assets/conscious-shopping/concha.jpg";
import Timer from "../Timer";
import { zIndexes } from "../theme";
import { Link } from "react-router-dom";
import Flex from "../Flex";

type GridLayoutProps = FlexboxProps & LayoutProps & PositionProps & GridProps;

const Grid = styled.div<GridLayoutProps>`
  ${flexbox};
  ${layout};
  ${grid};
`;

const TimerContainer = styled.div<GridLayoutProps>`
  ${grid};
`;

const ProjectIcon = styled.img<GridLayoutProps>`
  ${layout};
  ${grid};
`;

const Illustration = styled.img<GridLayoutProps>`
  ${layout};
  ${flexbox};
  ${grid};
  opacity: 0.5;
`;

const ProjectLinkWrapper = styled.div<LayoutProps & GridProps & FlexboxProps>`
  ${layout};
  ${grid};
  ${flexbox};
  display: flex;
  align-items: center;
`;

const ConsciousShoppingPreview: React.FC<{ launchDate: string }> = ({
  launchDate,
}) => {
  return (
    <Grid
      display={["flex", "flex", "flex", "grid"]}
      flexDirection={["column", "column", "column"]}
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(5, 20%)"
      alignItems="center"
    >
      <Link to="/projects">
        <ProjectIcon
          src={projectIcon}
          alt="icon image"
          maxWidth="20%"
          gridColumn={1}
          gridRow={1}
        />
      </Link>
      <Illustration
        src={boots}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={1}
        gridRow={2}
        justifySelf="flex-end"
        alignSelf="center"
      />
      <TimerContainer zIndex={zIndexes.inFront} gridColumn={2} gridRow={2}>
        <Timer launchDate={launchDate} />
      </TimerContainer>
      <Illustration
        src={bag}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={2}
        gridRow={1}
        justifySelf="center"
        alignSelf="center"
      />
      <Illustration
        src={shell}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={2}
        gridRow={3}
        justifySelf="flex-start"
        alignSelf="center"
      />
      <Illustration
        src={trex}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={2}
        gridRow={3}
        justifySelf="flex-end"
        alignSelf="center"
      />
      <Illustration
        src={sunglasses}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={3}
        gridRow={2}
        alignSelf="center"
      />
    </Grid>
  );
};

export default ConsciousShoppingPreview;
