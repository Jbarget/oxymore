import React from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import statue from "../assets/project-page/statue.png";

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

const EroticStoriesPreview: React.FC<{ launchDate: string }> = ({
  launchDate,
}) => {
  return (
    <Main justifyContent="center" alignItems="center">
      <Container justifyContent="center" alignItems="center">
        <Img src={statue} alt="statue icon" maxWidth="30%" />
      </Container>
      <Timer launchDate={launchDate} />
    </Main>
  );
};

export default EroticStoriesPreview;
