import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  LineHeightProps,
  PositionProps,
  SpaceProps,
  border,
  flexbox,
  layout,
  lineHeight,
  position,
  space,
} from "styled-system";

import styled from "styled-components";

const Flex = styled.div<
  FlexboxProps &
    SpaceProps &
    LayoutProps &
    PositionProps &
    BorderProps &
    LineHeightProps
>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${border};
  ${lineHeight};
`;

export default Flex;
