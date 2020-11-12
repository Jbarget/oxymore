import React from "react";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";
import EroticStoriesPreview from "./EroticStoriesPreview";

import PreviewOrProjectPage from "./PreviewOrProjectPage";
import EroticStoriesContent from "./EroticStoriesContent";

const Main = styled.main<TypographyProps>`
  ${typography};
  height: 100%;
`;

const launchDate = "2020-12-21";
const EroticStories = () => {
  return (
    <Main fontFamily="secondary" textAlign="justify">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={EroticStoriesPreview}
        ProjectPage={EroticStoriesContent}
      />
    </Main>
  );
};

export default EroticStories;
