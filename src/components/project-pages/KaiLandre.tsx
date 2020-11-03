import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import KaiLandrePreview from "./KaiLandrePreview";
import ReactPlayer from 'react-player/lazy'

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100%;
  ${flexbox}
`;

const Container = styled.div<LayoutProps>`
  ${layout};
`;

const KaiLandre = () => {

  return (
    <Main justifyContent="center" alignItems="center">
      <Container height='100%' width='100%'>
      <ReactPlayer url='https://www.youtube.com/watch?v=AGSH_acR4wA' width='100%' height='100%'/>
      </Container>
      {/* <KaiLandrePreview/> */}
    </Main>
  );
};

export default KaiLandre;
