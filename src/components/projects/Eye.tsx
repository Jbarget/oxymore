import EyeContent from "./EyeContent";
import Flex from "../Flex";
import Icon from "./Icon";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import React from "react";
import Timer from "../Timer";
import eye from "./../../assets/project-page/project-icons/eye.png";

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={eye}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};
const launchDate = "2021-03-21";
const Eye = () => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={PreviewPage}
        ProjectPage={EyeContent}
      />
    </Flex>
  );
};

export default Eye;
