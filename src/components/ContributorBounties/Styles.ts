import styled, {css} from 'styled-components';
import {A} from 'components';
import colors from 'styles/colors';

export const Container = styled.div`
  border-right: 1px solid ${colors.palette.gray['100']};
`;

export const Table = styled.table`
  width: 100%;
`;

const commonTable = css`
  padding: 2px 0 2px 12px;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 12px;
  }

  &:last-of-type {
    padding-right: 12px;
    text-align: right;
  }

  // Recent Bounty (name of bounty)
  &:nth-child(1) {
    max-width: 140px;
    min-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Repository
  &:nth-child(2) {
    max-width: 140px;
    min-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1400px) {
      display: none;
    }
  }

  // Completed
  &:nth-child(3) {
    max-width: 70px;
    min-width: 70px;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  // Amount
  &:nth-child(4) {
    max-width: 100px;
    min-width: 100px;
  }
`;

export const Td = styled.td`
  ${commonTable}
`;

export const Th = styled.th`
  ${commonTable}
  color: ${colors.palette.gray['500']};
  font-weight: normal;
  padding-bottom: 6px;
  text-align: left;
`;

export const TdAmount = styled.td`
  ${commonTable}
  color: ${colors.tertiary};
`;

export const IssueLink = styled(A)`
  color: ${colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;
