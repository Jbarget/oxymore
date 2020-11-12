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
import shell from "../assets/project-page/shell.png";
import trex from "../assets/conscious-shopping/t-rex.jpg";
import boots from "../assets/conscious-shopping/boots.jpg";
import sunglasses from "../assets/conscious-shopping/sunglasses.jpg";
import concha from "../assets/conscious-shopping/concha.jpg";
import Timer from "../Timer";
import { zIndexes } from "../theme";
import { Link } from "react-router-dom";
import Flex from "../Flex";

type GridLayoutProps = FlexboxProps & LayoutProps & PositionProps & GridProps;

const ProjectIconShell = styled.img<LayoutProps & GridProps>`
  ${layout};
  ${grid};
`;

type IllustrationProps = LayoutProps & FlexboxProps & GridProps;

const Illustration = styled.img<IllustrationProps>`
  ${layout};
  ${flexbox};
  ${grid};
  opacity: 0.5;
`;

const ConsciousShoppingPreview: React.FC<{ launchDate: string }> = ({
  launchDate,
}) => {
  return (
    <Flex
      display={["flex", "flex", "flex", "grid"]}
      flexDirection={["column", "column", "column", "row"]}
      height="100%"
      alignItems="center"
    >
      <Link to="/projects">
        <ProjectIconShell
          src={shell}
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
      <Illustration
        src={bag}
        alt="illustration image"
        maxWidth="50%"
        gridColumn={2}
        justifySelf="center"
        alignSelf="center"
      />
      <Flex zIndex={zIndexes.inFront} justifySelf="center" alignSelf="center">
        <Timer launchDate={launchDate} />
      </Flex>
      <Illustration
        src={concha}
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
    </Flex>
  );
};

export default ConsciousShoppingPreview;
