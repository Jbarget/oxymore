import React from "react";
import styled from "styled-components";
import {
  layout,
  flexbox,
  grid,
  LayoutProps,
  FlexboxProps,
  GridProps,
} from "styled-system";
import { Link } from "react-router-dom";
import stairs from "./assets/project-page/stairs.png";
import shell from "./assets/project-page/shell.png";
import eye from "./assets/project-page/eye.png";
import statue from "./assets/project-page/statue.png";
import dragon from "./assets/project-page/dragon.png";
import knife from "./assets/project-page/knife.png";
import mask from "./assets/project-page/mask.png";
import spider from "./assets/project-page/spider.png";
import magnify from "./assets/project-page/magnify.png";
import Grid from "./Grid";

const ProjectLinkWrapper = styled.div<LayoutProps & GridProps & FlexboxProps>`
  ${layout};
  ${grid};
  ${flexbox};
  display: flex;
  align-items: center;
`;

const Img = styled.img<LayoutProps>`
  ${layout};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
`;

const ProjectsGrid = () => {
  const iconSizes = ["100%", "100%", "60%", "30%"];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(4, 1fr)"
    >
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 2]}
        gridRow={1}
        justifySelf={["center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to="/projects/editorial">
          <Img src={stairs} alt="stairs icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={2}
        gridRow={[2, 2, 2, "1/3"]}
        justifySelf={["center", "center", "center", "start"]}
        maxWidth={iconSizes}
      >
        <Link to="/projects/consciousshopping">
          <Img src={shell} alt="shell icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1]}
        gridRow={[3, 3, 3, "1/3"]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to="/projects/eyes">
          <Img src={eye} alt="eye icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1]}
        gridRow={[4, 4, 4, 3]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to="/projects/eroticstories">
          <Img src={statue} alt="statue icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 1]}
        gridRow={[5, 5, 5, "2/4"]}
        justifySelf={["center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to="/projects/kailandre">
          <Img src={dragon} alt="dragon icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 3]}
        gridRow={[6, 6, 6, 3]}
        maxWidth={iconSizes}
        justifySelf={["center", "center", "center", "start"]}
      >
        <Link to="/projects/belledejour">
          <Img src={knife} alt="knife icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={[2, 2, 2, 3]}
        gridRow={[7, 7, 7, 2]}
        justifySelf="center"
        maxWidth={iconSizes}
      >
        <Link to="/projects/marcmedina">
          <Img src={mask} alt="mask icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={2}
        gridRow={[8, 8, 8, "2/4"]}
        maxWidth={iconSizes}
        justifySelf="center"
      >
        <Link to="/projects/leoadef">
          <Img src={spider} alt="spider icon" />
        </Link>
      </ProjectLinkWrapper>
      <ProjectLinkWrapper
        gridColumn={2}
        gridRow={[9, 9, 9, 2]}
        justifySelf={["center", "center", "center", "end"]}
        maxWidth={iconSizes}
      >
        <Link to="/projects/themap">
          <Img src={magnify} alt="magnify icon" />
        </Link>
      </ProjectLinkWrapper>
    </Grid>
  );
};

export default ProjectsGrid;