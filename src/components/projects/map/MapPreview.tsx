import Flex from "../../Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import magnify from "../../../assets/project-page/project-icons/magnify.png";

const MapPreview: React.FC<{ launchDate: string }> = ({ launchDate }) => {
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

export default MapPreview;
