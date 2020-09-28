import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { FlexboxProps, flexbox } from "styled-system";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${flexbox}
`;

const Loading = () => {
  return (
    <Main justifyContent="center">
      <Timer endDate="2020-09-30" />
    </Main>
  );
};

export default Loading;
