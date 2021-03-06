import React, { Fragment } from "react";

import ConsciousShoppingCarousel from "./ConsciousShoppingCarousel";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";
import Flex from "../../styles/Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";

const ConsciousShoppingContent = () => {
  return (
    <Fragment>
      <ConsciousShoppingCarousel />
    </Fragment>
  );
};

const launchDate = "2021-02-19";
const ConsciousShopping = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={ConsciousShoppingPreview}
        ProjectPage={ConsciousShoppingContent}
      />
    </Flex>
  );
};

export default ConsciousShopping;
