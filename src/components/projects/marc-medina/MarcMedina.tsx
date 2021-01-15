import Flex from "../../Flex";
import Icon from "../Icon";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import React from "react";
import Timer from "../../Timer";
import mask from "../../../assets/project-page/project-icons/mask.png";

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
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

const launchDate = "2021-02-19";
const MarcMedina = () => {
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
        ProjectPage={() => null}
      />
    </Flex>
  );
};

export default MarcMedina;
