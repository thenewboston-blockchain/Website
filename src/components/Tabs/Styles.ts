import styled from 'styled-components';

import colors from 'styles/colors';
import {h2} from 'styles/fonts';

export const TabsContainer = styled.div`
  border-bottom: 1px solid ${colors.palette.gray['100']};
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

type TabProps = {
  isActive: boolean;
};

export const Tab = styled.div<TabProps>`
  ${h2.regular}
  border-bottom: 3px solid ${(props) => (props.isActive ? colors.primary : 'transparent')};
  color: ${(props) => (props.isActive ? colors.primary : colors.palette.gray['500'])};
  cursor: pointer;
  outline: none;
  padding: 12px;

  &:hover {
    border-bottom-color: ${colors.palette.gray['500']};
  }
`;
