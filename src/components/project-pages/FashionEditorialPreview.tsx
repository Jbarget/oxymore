import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { FlexboxProps, flexbox, layout, LayoutProps } from "styled-system";
import stairs from "../assets/project-page/stairs.png";

const Container = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const FashionEditorial: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Container justifyContent="center" alignItems="center">
        <Img src={stairs} alt="stairs icon" maxWidth="30%" />
      </Container>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

export default FashionEditorial;
