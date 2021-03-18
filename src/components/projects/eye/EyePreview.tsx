import Flex from "../../styles/Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import eye from "../../../assets/project-page/project-icons/eye.png";

const EyePreview: React.FC<{ launchDate: string }> = ({ launchDate }) => {
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

export default EyePreview;
