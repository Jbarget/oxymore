import { LayoutProps, layout } from "styled-system";

import Flex from "../../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import React from "react";
import Timer from "../../Timer";
import stairs from "../../../assets/project-page/project-icons/stairs.png";
import styled from "styled-components";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const FashionEditorial: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Flex
      flex="auto"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Link to={PROJECTS_URL}>
        <Flex justifyContent="center" alignItems="center">
          <Img src={stairs} alt="stairs icon" maxWidth="30%" />
        </Flex>
      </Link>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default FashionEditorial;
