import { LayoutProps, PositionProps, layout, position } from "styled-system";
import React, { Fragment } from "react";

import Flex from "../../Flex";
import KaiLandrePreview from "./KaiLandrePreview";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import ReactPlayer from "react-player/lazy";
import dragon from "../../../assets/project-page/project-icons/dragon.png";
import styled from "styled-components";
import theme from "../../theme";

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const KaiLandreContent = () => {
  const url = "https://www.youtube.com/watch?v=AGSH_acR4wA";

  return (
    <Fragment>
      <Flex flex="auto" height={["60vh", "60vh", "60vh", "80vh"]}>
        <ReactPlayer
          url={url}
          position="relative"
          width="100%"
          height="100%"
          controls
          playing
          muted
          zindex={theme.zIndexes.behind}
        ></ReactPlayer>
        <ReturnToProjectsPage
          to={PROJECTS_URL}
          width={80}
          position="absolute"
          right={60}
          bottom={100}
          display={["none", "none", "block", "block"]}
        >
          <img src={dragon} alt="dragon icon" />
        </ReturnToProjectsPage>
      </Flex>
    </Fragment>
  );
};

const launchDate = "2021-01-22";
const KaiLandre = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={KaiLandrePreview}
        ProjectPage={KaiLandreContent}
      />
    </Flex>
  );
};

export default KaiLandre;
