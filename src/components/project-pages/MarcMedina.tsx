import React, { Fragment } from "react";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import Timer from "../Timer";
import mask from "../assets/project-page/mask.png";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Flex from "../Flex";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center">
        <Img src={mask} alt="mask icon" maxWidth="30%" />
      </Flex>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

const launchDate = "2020-12-21";
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
