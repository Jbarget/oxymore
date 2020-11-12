import React from "react";
import styled from "styled-components";
import {
  FlexboxProps,
  flexbox,
  typography,
  TypographyProps,
} from "styled-system";

import ConsciousShoppingContent from "./ConsciousShoppingContent";
import ConsciousShoppingPreview from "./ConsciousShoppingPreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

const Main = styled.main<FlexboxProps & TypographyProps>`
  display: flex;
  height: 100%;
  ${flexbox}
  ${typography};
`;

const launchDate = "2020-12-21";
const ConsciousShopping = () => {
  return (
    <Main justifyContent="center" alignItems="center" fontFamily="secondary">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={ConsciousShoppingPreview}
        ProjectPage={ConsciousShoppingContent}
      />
    </Main>
  );
};

export default ConsciousShopping;
