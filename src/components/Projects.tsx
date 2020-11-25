import React, { useCallback } from "react";
import styled from "styled-components";
import {
  layout,
  space,
  LayoutProps,
  SpaceProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  BackgroundProps,
  background,
} from "styled-system";
import BuyButton from "./BuyButton";
import { zIndexes } from "./theme";
import Flex from "./Flex";
import ProjectsGrid from "./ProjectsGrid";

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

  const iconSizes = ["100%", "100%", "75%", "30%"];

  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <ProjectsGrid />
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "15%"]}
        zIndex={zIndexes.inFront}
      >
        <BuyButton
          successUrl={`${process.env.REACT_APP_BASE_URL}/projects`}
          cancelUrl={`${process.env.REACT_APP_BASE_URL}/projects`}
        />
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
