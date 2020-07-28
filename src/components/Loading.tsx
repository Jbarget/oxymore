import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { FlexboxProps, flexbox } from "styled-system";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${flexbox}
`;

const Container = styled.div``;

const Loading = () => {
  return (
    <Main justifyContent="center">
      <Timer />
    </Main>
  );
};

export default Loading;
