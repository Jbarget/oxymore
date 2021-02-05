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

import Flex from "../../Flex";
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

const TimerContainer = styled.div<GridProps & LayoutProps>`
  ${grid};
  ${layout};
  z-index: ${theme.zIndexes.inFront};
`;

const ProjectIcon = styled.img<GridProps & LayoutProps & PositionProps>`
  ${layout};
  ${grid};
  ${position};
  z-index: ${theme.zIndexes.inFront};
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
    <Flex flex="auto" justifyContent="center" alignItems="center" height="auto">
      <Div
        display={["flex", "flex", "flex", "flex", "grid"]}
        flexDirection="column"
        gridTemplateColumns="3, 1fr"
        gridTemplateRows="140px 140px 140px 140px"
        alignItems="center"
        width="80%"
      >
        <ReturnToProjectsPage to={PROJECTS_URL}>
          <ProjectIcon
            src={projectIcon}
            alt="icon image"
            width={80}
            minWidth={80}
            gridColumn={1}
            gridRow={1}
            left={30}
            top={80}
            position="absolute"
          />
        </ReturnToProjectsPage>
        <Illustration
          src={boots}
          alt="illustration image"
          width={240}
          minWidth={240}
          gridColumn={1}
          gridRow={2}
          justifySelf="flex-end"
          alignSelf="center"
        />
        <TimerContainer
          gridColumn={2}
          gridRow="2/4"
          width={["auto", "auto", "auto", 444]}
          minWidth={["auto", "auto", "auto", 444]}
        >
          <Timer launchDate={launchDate} />
        </TimerContainer>
        <Illustration
          src={bag}
          alt="illustration image"
          width={240}
          minWidth={240}
          gridColumn={2}
          gridRow={1}
          justifySelf="center"
        />
        <Illustration
          src={shell}
          alt="illustration image"
          width={240}
          minWidth={240}
          gridColumn={2}
          gridRow={4}
          justifySelf="flex-start"
          alignSelf="center"
        />
        <Illustration
          src={trex}
          alt="illustration image"
          width={240}
          minWidth={240}
          gridColumn={2}
          gridRow={4}
          justifySelf="flex-end"
          alignSelf="center"
        />
        <Illustration
          src={sunglasses}
          alt="illustration image"
          width={240}
          minWidth={240}
          gridColumn={3}
          gridRow="1/3"
          alignSelf="start"
        />
      </Div>
    </Flex>
  );
};

export default ConsciousShoppingPreview;
