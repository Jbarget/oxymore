import React from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import ReactPlayer from "react-player/lazy";

import KaiLandrePreview from "./KaiLandrePreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100%;
  ${flexbox}
`;

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

const launchDate = "2019-12-21";
const KaiLandre: React.FC = () => {
  return (
    <Main justifyContent="center" alignItems="center">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={KaiLandrePreview}
        ProjectPage={KaiLandreContent}
      />
    </Main>
  );
};

export default KaiLandre;
