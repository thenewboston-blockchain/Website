import styled from 'styled-components';
import colors from 'styles/colors';
// import type {Shape} from '.';
interface TableParamsProps {
  bordered?: boolean;
  clickable?: boolean;
  // shape?: Shape;
}

export const TableParams = styled.div<TableParamsProps>`
  border: 1px solid #e6e6e6;
  margin: 0 0 20px;
  max-width: 100%;
  overflow-x: auto;
`;
