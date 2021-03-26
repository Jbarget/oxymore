import Flex from "./styles/Flex";
import React from "react";
import Timer from "./Timer";

const Loading = () => {
  return (
    <Flex flex="auto" overflow="hidden" justifyContent="center">
      <Timer launchDate="2021-01-15" />
    </Flex>
  );
};

export default Loading;
