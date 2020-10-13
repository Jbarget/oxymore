import React from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import stairs from "../assets/project-page/stairs.png";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  ${flexbox}
`;

const Container = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const FashionEditorial = () => {
  return (
    <Main justifyContent="center" alignItems="center">
      <Container justifyContent="center" alignItems="center">
        <Img src={stairs} maxWidth="30%" />
      </Container>
      <Timer endDate="2020-11-20" />
    </Main>
  );
};

export default FashionEditorial;