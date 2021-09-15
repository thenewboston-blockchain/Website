import styled from 'styled-components';
import {Icon as BaseIcon} from '@thenewboston/ui';

import colors from 'styles/colors';

const getBackgroundColor = (type: string) => {
  switch (type) {
    case 'success':
      return colors.tertiary;
    case 'warning':
      return colors.alert;
    default:
      return colors.white;
  }
};

type ContainerProps = {
  type: 'success' | 'warning';
};

export const Container = styled.div<ContainerProps>`
  background: ${(props) => getBackgroundColor(props.type)};
  display: flex;
  padding: 12px;
`;

export const Icon = styled(BaseIcon)`
  color: ${colors.white};
  margin-right: 12px;
`;

export const Text = styled.div`
  align-items: center;
  color: ${colors.white};
  display: flex;
`;
