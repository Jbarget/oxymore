import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import { LayoutProps, PositionProps, layout, position } from "styled-system";
import React, { Fragment } from "react";

import Flex from "../../styles/Flex";
// @ts-ignore
import InnerImageZoom from "react-inner-image-zoom";
import { Link } from "react-router-dom";
import MapPreview from "./MapPreview";
import { PROJECTS_URL } from "../../../constants/router-urls";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import magnify from "../../../assets/project-page/project-icons/magnify.png";
import mapSmall from "../../../assets/project-page/map/mapa-barcelona-small.jpg";
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

const MapContent = () => {
  return (
    <Fragment>
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="absolute"
        left={[20, 20, 20, 40]}
        top={80}
      >
        <img src={magnify} alt="magnify icon" />
      </ReturnToProjectsPage>
      <InnerImageZoom
        src={mapSmall}
        alt="David Macho's Map of Barcelona"
        zoomScale={0.4}
        fullscreenOnMobile
      />
    </Fragment>
  );
};

const launchDate = "2021-02-26";
const Map = () => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={MapPreview}
        ProjectPage={MapContent}
      />
    </Flex>
  );
};

export default Map;
