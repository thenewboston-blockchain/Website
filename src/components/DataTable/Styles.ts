import styled from 'styled-components';
import colors from 'styles/colors';
import {b1} from 'styles/fonts';

export const Table = styled.table`
  box-shadow: 0 1px 13px rgba(0, 0, 0, 0.06);
  display: block;
  overflow-x: auto;
  width: fit-content;
  max-width: 100%;
`;

export const THead = styled.thead`
  background: ${colors.palette.blue['800']};
  color: ${colors.white};
`;

export const Th = styled.th`
  ${b1.regular}
  padding: 8px 16px;
  text-align: left;

  &:not(:last-child) {
    border-right: 1px solid ${colors.white};
  }
`;

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.palette.gray['075']};
  }
`;

export const Td = styled.td`
  ${b1.regular}
  min-width: 120px;
  padding: 8px 16px;

  &:not(:last-child) {
    border-right: 1px solid ${colors.palette.gray['075']};
  }
`;
