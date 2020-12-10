import Flex from "./Flex";
import React from "react";
import Timer from "./Timer";

const Loading = () => {
  return (
    <Flex flex="auto" overflow="hidden" justifyContent="center">
      <Timer launchDate="2021-01-08" />
    </Flex>
  );
};

export default Loading;
