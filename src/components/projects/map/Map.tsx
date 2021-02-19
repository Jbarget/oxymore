import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import Flex from "../../Flex";
// @ts-ignore
import InnerImageZoom from "react-inner-image-zoom";
import MapPreview from "./MapPreview";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import mapSmall from "../../../assets/project-page/map/mapa-barcelona-small.jpg";

const MapContent = () => {
  return (
    <Flex>
      <InnerImageZoom
        src={mapSmall}
        alt="David Macho's map of Barcelona"
        zoomScale={0.4}
        fullscreenOnMobile
        moveType="drag"
      />
    </Flex>
  );
};

const launchDate = "2020-02-26";
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
