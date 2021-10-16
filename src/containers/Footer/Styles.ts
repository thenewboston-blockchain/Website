import styled from 'styled-components';

import {Icon} from '@thenewboston/ui';
import colors from 'styles/colors';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
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
