import styled from 'styled-components';

import {Icon} from '@thenewboston/ui';
import colors from 'styles/colors';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: 768px) {
    flex-direction: column; // single column
  }
`;

export const SocialMediaLink = styled.div`
  align-items: center;
  display: flex;
`;

export const SocialMediaIcon = styled(Icon)`
  color: ${colors.palette.neutral['400']};
  margin-right: 4px;
`;
