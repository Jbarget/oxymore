import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  flexbox,
  grid,
  layout,
  position,
} from "styled-system";

import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import React from "react";
import Timer from "../../Timer";
import bag from "../../../assets/project-page/conscious-shopping/bag.jpg";
import boots from "../../../assets/project-page/conscious-shopping/boots.jpg";
import projectIcon from "../../../assets/project-page/project-icons/shell.png";
import shell from "../../../assets/project-page/conscious-shopping/concha.jpg";
import styled from "styled-components";
import sunglasses from "../../../assets/project-page/conscious-shopping/sunglasses.jpg";
import theme from "../../theme";
import trex from "../../../assets/project-page/conscious-shopping/t-rex.jpg";

const Div = styled.div<GridProps & LayoutProps & FlexboxProps>`
  ${flexbox};
  ${layout};
  ${grid};
`;

const TimerContainer = styled.div<GridProps & PositionProps>`
  ${grid};
  ${position}
`;

const ProjectIcon = styled.img<GridProps & LayoutProps>`
  ${layout};
  ${grid};
  transition: transform 0.4s;
  transform-origin: left;
  &:hover {
    transform: scale(1.02);
`;

const Illustration = styled.img<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
  opacity: 0.5;
`;

const ReturnToProjectsPage = styled(Link)<FlexboxProps>`
  ${flexbox};
`;

const ConsciousShoppingPreview: React.FC<{ launchDate: string }> = ({
  launchDate,
}) => {
  return (
    <Div
      display={["flex", "flex", "flex", "grid"]}
      flexDirection={["column", "column", "column"]}
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(5, 20%)"
      alignItems="center"
      height={["unset", "unset", "unset", "86vh"]}
    >
      <ReturnToProjectsPage to={PROJECTS_URL} alignSelf="start">
        <ProjectIcon
          src={projectIcon}
          alt="icon image"
          maxWidth="20%"
          gridColumn={1}
          gridRow={1}
        />
      </ReturnToProjectsPage>
      <Illustration
        src={boots}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={1}
        gridRow={2}
        justifySelf="flex-end"
        alignSelf="center"
      />
      <TimerContainer
        zIndex={theme.zIndexes.inFront}
        gridColumn={2}
        gridRow="2/4"
      >
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
        gridRow={4}
        justifySelf="flex-start"
        alignSelf="center"
      />
      <Illustration
        src={trex}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={2}
        gridRow={4}
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
    </Div>
  );
};

export default ConsciousShoppingPreview;
