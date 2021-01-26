import { LayoutProps, layout } from "styled-system";
import React, { Fragment } from "react";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../constants/router-urls";
import styled from "styled-components";

const Img = styled.img<LayoutProps>`
  ${layout};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.01);
  }
`;

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Fragment>
      <Link to={PROJECTS_URL}>
        <Flex justifyContent="center" alignItems="center">
          <Img src={icon} alt="icon" maxWidth={[100, 100, 160, 160]} />
        </Flex>
      </Link>
    </Fragment>
  );
};

export default Icon;
