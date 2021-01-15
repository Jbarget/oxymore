import { FlexboxProps, TypographyProps, typography } from "styled-system";

import ConsciousShoppingContent from "./ConsciousShoppingContent";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";
import Flex from "../../Flex";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import styled from "styled-components";

const Main = styled(Flex)<FlexboxProps & TypographyProps>`
  ${typography};
`;

const launchDate = "2021-02-19";
const ConsciousShopping = () => {
  return (
    <Main
      flex="auto"
      justifyContent="center"
      alignItems="center"
      fontFamily="secondary"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={ConsciousShoppingPreview}
        ProjectPage={ConsciousShoppingContent}
      />
    </Main>
  );
};

export default ConsciousShopping;
