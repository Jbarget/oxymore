import { TypographyProps, typography } from "styled-system";

import EroticStoriesContent from "./EroticStoriesContent";
import EroticStoriesPreview from "./EroticStoriesPreview";
import Flex from "../../Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import styled from "styled-components";

const Main = styled(Flex)<TypographyProps>`
  ${typography};
`;

const launchDate = "2021-03-21";
const EroticStories = () => {
  return (
    <Main
      flex="auto"
      fontFamily="secondary"
      textAlign="justify"
      flexDirection="column"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={EroticStoriesPreview}
        ProjectPage={EroticStoriesContent}
      />
    </Main>
  );
};

export default EroticStories;
