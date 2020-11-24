import React from "react";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";
import EroticStoriesPreview from "./EroticStoriesPreview";

import PreviewOrProjectPage from "./PreviewOrProjectPage";
import EroticStoriesContent from "./EroticStoriesContent";
import Flex from "../Flex";

const Main = styled(Flex)<TypographyProps>`
  ${typography};
`;

const launchDate = "2020-12-21";
const EroticStories = () => {
  return (
    <Main flex="auto" fontFamily="secondary" textAlign="justify">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={EroticStoriesPreview}
        ProjectPage={EroticStoriesContent}
      />
    </Main>
  );
};

export default EroticStories;
