import React from "react";
import styled from "styled-components";
import Timer from "../Timer";
import { layout, LayoutProps } from "styled-system";
import stairs from "../assets/project-page/stairs.png";
import Flex from "../Flex";
import { Link } from "react-router-dom";

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
      <Link to="/projects">
        <Flex justifyContent="center" alignItems="center">
          <Img src={stairs} alt="stairs icon" maxWidth="30%" />
        </Flex>
      </Link>
      <Timer launchDate={launchDate} />
    </Flex>
  );
};

export default FashionEditorial;
