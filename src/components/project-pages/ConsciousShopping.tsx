import React from "react";
import styled from "styled-components";
import { FlexboxProps, typography, TypographyProps } from "styled-system";
import Flex from "../Flex";

import ConsciousShoppingContent from "./ConsciousShoppingContent";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

const Main = styled(Flex)<FlexboxProps & TypographyProps>`
  ${typography};
`;

const launchDate = "2020-12-21";
const ConsciousShopping = () => {
  return (
    <Main
      height="100%"
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
