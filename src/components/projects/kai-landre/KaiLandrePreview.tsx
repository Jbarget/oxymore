import Flex from "../../styles/Flex";
import Icon from "../Icon";
import React from "react";
import Timer from "../../Timer";
import dragon from "../../../assets/project-page/project-icons/dragon.png";

interface KaiLandrePreviewProps {
  launchDate: string;
}
const KaiLandrePreview: React.FC<KaiLandrePreviewProps> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon icon={dragon}></Icon>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default KaiLandrePreview;
