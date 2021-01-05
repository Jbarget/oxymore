import { LayoutProps, layout } from "styled-system";
import React, { Fragment } from "react";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../constants/router-urls";
import PreviewOrProjectPage from "./PreviewOrProjectPage";
import Timer from "../Timer";
import knife from "./../../assets/project-page/project-icons/knife.png";
import styled from "styled-components";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const PreviewPage: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Link to={PROJECTS_URL}>
        <Flex justifyContent="center" alignItems="center">
          <Img src={knife} alt="knife icon" maxWidth="30%" />
        </Flex>
      </Link>
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