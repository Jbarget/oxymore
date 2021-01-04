import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { layout, LayoutProps } from "styled-system";

import Timer from "../Timer";
import magnify from "../assets/project-page/magnify.png";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Flex from "../Flex";
import { PROJECTS_URL } from "../../constants/router-urls";
import MapContent from "./MapContent";

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

const launchDate = "2020-01-21";
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
