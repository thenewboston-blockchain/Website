import styled from 'styled-components';

import colors from 'styles/colors';
import {h1, b1} from 'styles/fonts';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;

  @media (max-width: 992px) {
    max-width: 672px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  ${h1.bold};
  color: ${colors.palette.neutral['900']};
  margin-bottom: 24px;
`;

export const Description = styled.pre`
  ${b1.regular};
  color: ${colors.palette.gray['500']};
  white-space: pre-wrap;
`;
