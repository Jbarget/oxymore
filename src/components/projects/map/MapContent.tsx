import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import Flex from "../../Flex";
// @ts-ignore
import InnerImageZoom from "react-inner-image-zoom";
import React from "react";
import mapSmall from "../../../assets/project-page/map/mapa-barcelona-small.jpg";

const MapContent = () => {
  return (
    <Flex>
      <InnerImageZoom src={mapSmall} zoomScale={0.4} fullscreenOnMobile />
    </Flex>
  );
};

export default MapContent;
