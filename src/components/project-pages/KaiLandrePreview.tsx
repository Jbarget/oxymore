import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import dragon from "../assets/project-page/dragon.png";



const Container = styled.div<FlexboxProps & LayoutProps>`
  ${flexbox};
  ${layout};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const KaiLandrePreview = () => {
  return (
    <Fragment>
      <Container flexDirection="column" display="flex" justifyContent="center" alignItems="center">
        <Img src={dragon} alt="dragon icon" maxWidth="30%" />
        <Timer endDate="2020-11-20" />
      </Container>
    </Fragment>
  );
};

export default KaiLandrePreview;
