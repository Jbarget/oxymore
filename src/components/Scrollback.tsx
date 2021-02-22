import {
  BackgroundProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  background,
  layout,
  position,
  typography,
} from "styled-system";
import React, { useCallback } from "react";

import styled from "styled-components";
import theme from "./theme";

const Button = styled.button<
  PositionProps & TypographyProps & BackgroundProps & LayoutProps
>`
  ${position};
  ${typography};
  ${background};
  ${layout};
  z-index: ${theme.zIndexes.inFront}
  border: none;
`;

interface ButtonProps {
  bottom: number;
  left: number;
}

const Scrollback: React.FC<ButtonProps> = props => {
  const { bottom, left } = props;
  const scrollToTop = useCallback(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <Button
      display={["block", "block", "none", "none"]}
      position="fixed"
      bottom={bottom}
      left={left}
      fontSize={[3, 4]}
      background="transparent"
      onClick={scrollToTop}
    >
      UP
    </Button>
  );
};

export default Scrollback;
