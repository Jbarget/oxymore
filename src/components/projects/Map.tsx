import Flex from "../Flex";
import Icon from "./Icon";
import MapContent from "./MapContent";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import React from "react";
import Timer from "../Timer";
import magnify from "./../../assets/project-page/project-icons/magnify.png";

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={magnify}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

const launchDate = "2021-03-21";
const Map = () => {
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
        ProjectPage={MapContent}
      />
    </Flex>
  );
};

export default Map;
