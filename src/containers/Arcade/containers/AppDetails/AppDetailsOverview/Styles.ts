import styled from 'styled-components';

import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {h1, b1} from 'styles/fonts';

export const Container = styled(SharedContainer)`
  @media (max-width: 1366px) {
    padding: 0 48px;
  }

  @media (max-width: 992px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  ${h1.medium};
  color: ${colors.palette.neutral['900']};
  margin-bottom: 24px;
`;

export const Description = styled.pre`
  ${b1.regular};
  color: ${colors.palette.gray['500']};
  white-space: pre-wrap;
`;
