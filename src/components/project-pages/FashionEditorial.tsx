import React from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox } from "styled-system";
import FashionEditorialContent from "./FashionEditorialContent";
import FashionEditorialPreview from "./FashionEditorialPreview";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

const Main = styled.main<FlexboxProps>`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;
  ${flexbox};
`;

const launchDate = "2020-12-21";
const FashionEditorial = () => {
  return (
    <Main justifyContent="center" alignItems="center">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={FashionEditorialPreview}
        ProjectPage={FashionEditorialContent}
      />
    </Main>
  );
};

export default FashionEditorial;
