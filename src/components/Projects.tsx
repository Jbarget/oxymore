import React, { Fragment } from "react";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";
import stairs from "./assets/project-page/stairs.png";
import shell from "./assets/project-page/knife.png";
import eye from "./assets/project-page/eye.png";
import statue from "./assets/project-page/statue.png";
import dragon from "./assets/project-page/dragon.png";
import knife from "./assets/project-page/knife.png";
import mask from "./assets/project-page/mask.png";
import spider from "./assets/project-page/spider.png";
import magnify from "./assets/project-page/magnify.png";

const IconContainer = styled.div`
  width: 200px;
  height: 120px;
`;

const Icon = styled.a`
  a:hover {
    position: relative;
    width: 500px;
    height: auto;
  }
`;

const Projects = () => {
  return (
    <Fragment>
      <IconContainer>
        <Icon>
          <img
            src={stairs}
            style={{
              position: "relative",
              top: 100,
              left: 100,
            }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={shell}
            style={{ position: "relative", top: 240, left: 100 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={eye}
            style={{ position: "relative", bottom: 240, left: 420 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={statue}
            style={{ position: "relative", top: 54, left: 420 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={dragon}
            style={{ position: "relative", bottom: 260, left: 720 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={knife}
            style={{ position: "relative", bottom: 40, left: 680 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={mask}
            style={{ position: "relative", bottom: 720, left: 1020 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={spider}
            style={{ position: "relative", bottom: 320, left: 1020 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={magnify}
            style={{ position: "relative", bottom: 660, left: 1210 }}
          ></img>
        </Icon>
      </IconContainer>
    </Fragment>
  );
};

export default Projects;
