import React, { Fragment } from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { layout, LayoutProps } from "styled-system";
import stairs from "../assets/project-page/stairs.png";
import Flex from "../Flex";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const FashionEditorial: React.FC<{ launchDate: string }> = ({ launchDate }) => {
  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center">
        <Img src={stairs} alt="stairs icon" maxWidth="30%" />
      </Flex>
      <Timer launchDate={launchDate} />
    </Fragment>
  );
};

export default FashionEditorial;
