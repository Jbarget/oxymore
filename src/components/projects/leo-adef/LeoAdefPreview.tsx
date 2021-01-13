import Flex from "../../Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import knife from "../../../assets/project-page/project-icons/knife.png";

const LeoAdefPreview: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={knife}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default LeoAdefPreview;
