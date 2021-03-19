import Flex from "../../styles/Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import mask from "../../../assets/project-page/project-icons/mask.png";

const MarcMedinaPreview: React.FC<{ launchDate: string }> = ({
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
      <Icon icon={mask}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default MarcMedinaPreview;
