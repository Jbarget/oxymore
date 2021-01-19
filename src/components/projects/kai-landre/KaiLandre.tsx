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

const KaiLandreContent: React.FC = () => {
  const url = "https://www.youtube.com/watch?v=AGSH_acR4wA";

  return (
    <Fragment>
      <Flex flex="auto" height="100%" width="100%">
        <ReactPlayer
          url={url}
          controls
          playing
          muted
          height="100%"
          width="100%"
          position="relative"
          zIndex={theme.zIndexes.behind}
        ></ReactPlayer>
        <ReturnToProjectsPage
          to={PROJECTS_URL}
          maxWidth={80}
          zIndex={theme.zIndexes.inFront}
          position="absolute"
          display={["none", "none", "none", "block"]}
          right={100}
          bottom={20}
        >
          <img src={dragon} alt="dragon icon" />
        </ReturnToProjectsPage>
      </Flex>
    </Fragment>
  );
};

const launchDate = "2020-01-22";
const KaiLandre = () => {
  return (
    <Flex flex="auto" height={theme.heights.belowHeader} width="100%">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={KaiLandrePreview}
        ProjectPage={KaiLandreContent}
      />
    </Flex>
  );
};

export default KaiLandre;
