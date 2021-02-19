import {
  BELLE_DE_JOUR_URL,
  CONSCIOUS_SHOPPING_URL,
  EROTIC_STORIES_URL,
  EYES_URL,
  FASHION_EDITORIAL_URL,
  KAI_LANDRE_URL,
  LEO_ADEF_URL,
  MAP_URL,
  MARC_MEDINA_URL,
} from "../constants/router-urls";
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  flexbox,
  grid,
  layout,
} from "styled-system";

import Grid from "./Grid";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import React from "react";
import dragon from "../assets/project-page/project-icons/dragon.png";
import eye from "../assets/project-page/project-icons/eye.png";
import knife from "../assets/project-page/project-icons/knife.png";
import magnify from "../assets/project-page/project-icons/magnify.png";
import mask from "../assets/project-page/project-icons/mask.png";
import shell from "../assets/project-page/project-icons/shell.png";
import spider from "../assets/project-page/project-icons/spider.png";
import stairs from "../assets/project-page/project-icons/stairs.png";
import statue from "../assets/project-page/project-icons/statue.png";
import styled from "styled-components";

const ProjectLinkWrapper = styled(LazyLoad)<
  LayoutProps & GridProps & FlexboxProps
>`
  ${layout};
  ${grid};
  ${flexbox};
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
`;

const Img = styled.img`
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectsGrid = () => {
  const iconSizes = [80, 100, 120, 100, 130];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(4, 1fr)"
      height="80vh"
      width="100%"
    >
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1, 2]}
        gridRow={[1, 1, 1, 1, 1]}
        justifySelf={["center", "center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to={FASHION_EDITORIAL_URL}>
          <Img src={stairs} alt="stairs icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 2, 2]}
        gridRow={[2, 2, 2, 1, "1/3"]}
        justifySelf={["center", "center", "center", "center", "start"]}
        maxWidth={iconSizes}
      >
        <Link to={CONSCIOUS_SHOPPING_URL}>
          <Img src={shell} alt="shell icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 3, 1]}
        gridRow={[3, 3, 3, 1, "1/3"]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to={EYES_URL}>
          <Img src={eye} alt="eye icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1, 1]}
        gridRow={[4, 4, 4, 2, 3]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to={EROTIC_STORIES_URL}>
          <Img src={statue} alt="statue icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 2, 1]}
        gridRow={[5, 5, 5, 2, "2/4"]}
        justifySelf={["center", "center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to={KAI_LANDRE_URL}>
          <Img src={dragon} alt="dragon icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 3, 3]}
        gridRow={[6, 6, 6, 2, 3]}
        maxWidth={iconSizes}
        justifySelf={["center", "center", "center", "center", "start"]}
      >
        <Link to={LEO_ADEF_URL}>
          <Img src={knife} alt="knife icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1, 3]}
        gridRow={[7, 7, 7, 3, 2]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to={MARC_MEDINA_URL}>
          <Img src={mask} alt="mask icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 2, 2]}
        gridRow={[8, 8, 8, 3, "2/4"]}
        maxWidth={iconSizes}
        justifySelf="center"
      >
        <Link to={BELLE_DE_JOUR_URL}>
          <Img src={spider} alt="spider icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 3, 2]}
        gridRow={[9, 9, 9, 3, 2]}
        justifySelf={["center", "center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to={MAP_URL}>
          <Img src={magnify} alt="magnify icon" />
        </Link>
      </ProjectLinkWrapper>
    </Grid>
  );
};

export default ProjectsGrid;
