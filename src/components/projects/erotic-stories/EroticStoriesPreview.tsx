import Flex from "../../Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import statue from "../../../assets/project-page/project-icons/statue.png";

const EroticStoriesPreview: React.FC<{ launchDate: string }> = ({
  launchDate,
}) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={statue}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default EroticStoriesPreview;
