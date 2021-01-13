import Flex from "../../Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import spider from "../../../assets/project-page/project-icons/spider.png";

const BelledejourPreview: React.FC<{ launchDate: string }> = ({
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
      <Icon icon={spider}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default BelledejourPreview;
