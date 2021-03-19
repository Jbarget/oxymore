import {
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  grid,
  layout,
  position,
  space,
} from "styled-system";

import styled from "styled-components";

const Grid = styled.div<GridProps & SpaceProps & LayoutProps & PositionProps>`
  display: grid;
  ${grid};
  ${space};
  ${layout};
  ${position};
`;

export default Grid;
