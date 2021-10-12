import styled from 'styled-components';
import * as FontWeight from 'styles/fonts/fontWeights';
import colors from 'styles/colors';

export const Navigation = styled.div`
  align-items: center;
  color: ${colors.palette.cyan['900']};
  cursor: pointer;
  display: flex;
  height: 24px;

  &:hover {
    color: ${colors.palette.blue['500']};
    ${FontWeight.fontWeightBold}
  }
`;

export const Text = styled.div`
  font-weight: inherit;
`;

export const RightIcon = styled.div`
  margin-left: 12px;
`;

export const LeftIcon = styled.div`
  margin-right: 12px;
`;
