import {
  BackgroundProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  background,
  layout,
  position,
  space,
  typography,
} from "styled-system";
import React, { useCallback } from "react";

import BuyButton from "./BuyButton";
import Flex from "./Flex";
import ProjectsGrid from "./ProjectsGrid";
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
