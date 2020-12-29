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
import styled from "styled-components";
import { zIndexes } from "./theme";

const BuyButtonContainer = styled.div<PositionProps & SpaceProps>`
  ${position};
  ${space};
`;

type ScrollbackProps = PositionProps &
  TypographyProps &
  BackgroundProps &
  LayoutProps;

const Scrollback = styled.button<ScrollbackProps>`
  ${position};
  ${typography};
  ${background};
  ${layout};
  border: none;
`;

const Projects = () => {
  const scrollToTop = useCallback(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <ProjectsGrid />
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "15%"]}
        zIndex={zIndexes.inFront}
      >
        <BuyButton />
      </BuyButtonContainer>

      <Scrollback
        display={["block", "block", "block", "none"]}
        position="fixed"
        bottom={6}
        left={6}
        fontSize={[3, 4]}
        background="transparent"
        onClick={scrollToTop}
        zIndex={zIndexes.inFront}
      >
        UP
      </Scrollback>
    </Flex>
  );
};

export default Projects;
