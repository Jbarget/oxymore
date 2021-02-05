import ConsciousShoppingContent from "./ConsciousShoppingContent";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";
import Flex from "../../Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";

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
