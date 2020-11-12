import React, { Fragment } from "react";
import styled from "styled-components";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import Timer from "../Timer";
import mask from "../assets/project-page/mask.png";
import PreviewOrProjectPage from "./PreviewOrProjectPage";

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

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Container justifyContent="center" alignItems="center">
        <Img src={mask} alt="mask icon" maxWidth="30%" />
      </Container>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

const launchDate = "2020-12-21";
const MarcMedina = () => {
  return (
    <Main justifyContent="center" alignItems="center">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={PreviewPage}
        ProjectPage={() => null}
      />
    </Main>
  );
};

export default MarcMedina;
