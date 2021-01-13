import { TypographyProps, typography } from "styled-system";

import BelledejourContent from "./BelledejourContent";
import BelledejourPreview from "./BelledejourPreview";
import Flex from "../../Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import styled from "styled-components";

const Main = styled(Flex)<TypographyProps>`
  ${typography};
`;

const launchDate = "2021-03-21";
const Belledejour = () => {
  return (
    <Main
      flex="auto"
      fontFamily="secondary"
      textAlign="justify"
      flexDirection="column"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={BelledejourPreview}
        ProjectPage={BelledejourContent}
      />
    </Main>
  );
};

export default Belledejour;
