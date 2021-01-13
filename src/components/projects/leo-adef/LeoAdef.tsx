import { TypographyProps, typography } from "styled-system";

import Flex from "../../Flex";
import LeoAdefContent from "./LeoAdefContent";
import LeoAdefPreview from "./LeoAdefPreview";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import styled from "styled-components";

const Main = styled(Flex)<TypographyProps>`
  ${typography};
`;

const launchDate = "2021-03-21";
const LeoAdef = () => {
  return (
    <Main
      flex="auto"
      fontFamily="secondary"
      textAlign="justify"
      flexDirection="column"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={LeoAdefPreview}
        ProjectPage={LeoAdefContent}
      />
    </Main>
  );
};

export default LeoAdef;
