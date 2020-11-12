import styled from "styled-components";
import { grid, GridProps, space, SpaceProps } from "styled-system";

const Grid = styled.div<GridProps & SpaceProps & LayoutProps>`
  display: grid;
  ${grid};
  ${space};
  ${layout};
`;

export default Grid;
