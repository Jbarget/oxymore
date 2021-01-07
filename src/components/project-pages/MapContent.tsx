import React from "react";
// @ts-ignore
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import Flex from "../Flex";
import mapSmall from "./../assets/project-page/projects/map/mapa-barcelona-small.jpg";

const MapContent = () => {
  return (
    <Flex>
      <InnerImageZoom src={mapSmall} zoomScale={0.4} fullscreenOnMobile />
    </Flex>
  );
};

export default MapContent;
