import { LayoutProps, layout } from "styled-system";
import React, { Fragment } from "react";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import MapContent from "./MapContent";
import { PROJECTS_URL } from "../../constants/router-urls";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Timer from "../Timer";
import magnify from "../../assets/project-page/project-icons/magnify.png";
import styled from "styled-components";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Link to={PROJECTS_URL}>
        <Flex justifyContent="center" alignItems="center">
          <Img src={magnify} alt="magnify icon" maxWidth="30%" />
        </Flex>
      </Link>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

const launchDate = "2021-03-21";
const Map = () => {
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
        ProjectPage={MapContent}
      />
    </Flex>
  );
};

export default Map;
