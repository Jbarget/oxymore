import React from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { layout, LayoutProps } from "styled-system";
import statue from "../assets/project-page/statue.png";
import Flex from "../Flex";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

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
      <Flex justifyContent="center" alignItems="center">
        <Img src={statue} alt="statue icon" maxWidth="30%" />
      </Flex>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default EroticStoriesPreview;
