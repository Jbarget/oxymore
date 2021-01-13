import Flex from "../../Flex";
import KaiLandrePreview from "./KaiLandrePreview";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import ReactPlayer from "react-player/lazy";

const KaiLandreContent: React.FC = () => {
  const url = "https://www.youtube.com/watch?v=AGSH_acR4wA";

  return (
    <Flex flex="auto">
      <ReactPlayer url={url} flex="auto" width="100%" />
    </Flex>
  );
};

const launchDate = "2021-01-21";
const KaiLandre: React.FC = () => {
  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={KaiLandrePreview}
        ProjectPage={KaiLandreContent}
      />
    </Flex>
  );
};

export default KaiLandre;
