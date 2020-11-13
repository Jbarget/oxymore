import React from "react";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import ReactPlayer from "react-player/lazy";

import KaiLandrePreview from "./KaiLandrePreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Flex from "../Flex";

const Container = styled.div<LayoutProps>`
  ${layout};
`;

const KaiLandreContent: React.FC = () => {
  const url = "https://www.youtube.com/watch?v=AGSH_acR4wA";

  return (
    <Container height="100%" width="100%">
      <ReactPlayer url={url} width="100%" height="100%" />
    </Container>
  );
};

const launchDate = "2020-12-21";
const KaiLandre: React.FC = () => {
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={KaiLandrePreview}
        ProjectPage={KaiLandreContent}
      />
    </Flex>
  );
};

export default KaiLandre;
