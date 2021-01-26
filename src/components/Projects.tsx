import { PositionProps, SpaceProps, position, space } from "styled-system";

import BuyButton from "./BuyButton";
import Flex from "./Flex";
import ProjectsGrid from "./ProjectsGrid";
import React from "react";
import Scrollback from "./Scrollback";
import styled from "styled-components";
import theme from "./theme";

const BuyButtonContainer = styled.div<PositionProps & SpaceProps>`
  ${position};
  ${space};
`;

const Projects = () => {
  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <ProjectsGrid />
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "15%"]}
        zIndex={theme.zIndexes.inFront}
      >
        <BuyButton />
      </BuyButtonContainer>

      <Scrollback bottom={20} left={20} />
    </Flex>
  );
};

export default Projects;
