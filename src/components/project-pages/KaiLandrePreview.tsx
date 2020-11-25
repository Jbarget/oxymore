import React from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { layout, LayoutProps } from "styled-system";
import dragon from "../assets/project-page/dragon.png";
import { Link } from "react-router-dom";
import Flex from "../Flex";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

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
      <Link to="/projects">
        <Flex justifyContent="center" alignItems="center">
          <Img src={dragon} alt="dragon icon" maxWidth="30%" />
        </Flex>
      </Link>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default KaiLandrePreview;
