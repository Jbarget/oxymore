import Flex from "../../Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import stairs from "../../../assets/project-page/project-icons/stairs.png";

const FashionEditorial: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={stairs}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default FashionEditorial;
