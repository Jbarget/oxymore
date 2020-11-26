import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { LayoutProps, layout } from "styled-system";
import knife from "../assets/project-page/knife.png";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Flex from "../Flex";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center">
        <Img src={knife} alt="knife icon" maxWidth="30%" />
      </Flex>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

const launchDate = "2021-01-21";
const Belledejour = () => {
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

export default Belledejour;
