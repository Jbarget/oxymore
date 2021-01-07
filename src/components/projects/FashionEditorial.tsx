import React from "react";
import Flex from "../Flex";
import FashionEditorialContent from "./FashionEditorialContent";
import FashionEditorialPreview from "./FashionEditorialPreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

const launchDate = "2021-01-21";
const FashionEditorial = () => {
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
        PreviewPage={FashionEditorialPreview}
        ProjectPage={FashionEditorialContent}
      />
    </Flex>
  );
};

export default FashionEditorial;
