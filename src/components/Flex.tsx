import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";

import styled from "styled-components";

const Flex = styled.div<
  FlexboxProps & SpaceProps & LayoutProps & PositionProps & BorderProps
>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${border};
`;

export default Flex;
