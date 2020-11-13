import React from "react";

import Flex from "./Flex";
import Timer from "./Timer";

const Loading = () => {
  return (
    <Flex height="100%" overflow="hidden" justifyContent="center">
      <Timer launchDate="2020-11-27" />
    </Flex>
  );
};

export default Loading;
