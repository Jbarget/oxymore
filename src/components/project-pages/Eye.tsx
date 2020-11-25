import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { layout, LayoutProps } from "styled-system";
import eye from "../assets/project-page/eye.png";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Flex from "../Flex";
import EyeContent from "./EyeContent";

const Img = styled.img<LayoutProps>`
  ${layout};
`;
const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center">
        <Img src={eye} alt="eye icon" maxWidth="30%" />
      </Flex>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};
const launchDate = "2020-12-21";
const Eye = () => {
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
        ProjectPage={EyeContent}
      />
    </Flex>
  );
};

export default Eye;
