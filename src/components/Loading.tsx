import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { FlexboxProps, flexbox } from "styled-system";

const Main = styled.main<FlexboxProps>`
  display: flex;
  overflow: hidden;
  height: 100%;
  ${flexbox}
`;

const Loading = () => {
  return (
    <Main justifyContent="center">
      <Timer launchDate="2020-11-27" />
    </Main>
  );
};

export default Loading;
