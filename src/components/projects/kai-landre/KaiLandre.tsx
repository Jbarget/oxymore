import { LayoutProps, PositionProps, layout, position } from "styled-system";

import Flex from "../../Flex";
import KaiLandrePreview from "./KaiLandrePreview";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import ReactPlayer from "react-player/lazy";
import dragon from "../../../assets/project-page/project-icons/dragon.png";
import styled from "styled-components";
import theme from "../../theme";

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  z-index: ${theme.zIndexes.inFront};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const KaiLandreContent = () => {
  const url = "https://youtu.be/fjnXLRrHscM";

  return (
    <Flex flex="auto" height={["76vh", "76vh", "76vh", "80vh", "80vh"]}>
      <ReactPlayer
        url={url}
        position="relative"
        width="100%"
        height="100%"
        controls
        playing
      ></ReactPlayer>
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="absolute"
        right={60}
        bottom={100}
        display={["none", "none", "none", "block"]}
      >
        <img src={dragon} alt="dragon icon" />
      </ReturnToProjectsPage>
    </Flex>
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
