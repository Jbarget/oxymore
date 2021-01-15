import FashionEditorialContent from "./FashionEditorialContent";
import FashionEditorialPreview from "./FashionEditorialPreview";
import Flex from "../../Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";

const launchDate = "2021-02-05";
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
