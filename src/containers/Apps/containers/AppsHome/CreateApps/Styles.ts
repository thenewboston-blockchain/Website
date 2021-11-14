import styled from 'styled-components';

import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {d2, h3} from 'styles/fonts';

export const Wrapper = styled.div`
  padding: 120px 84px 160px;

  @media (max-width: 1366px) {
    padding: 96px 48px 112px;
  }

  @media (max-width: 992px) {
    padding: 88px 48px;
  }

  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;

export const Container = styled(SharedContainer)`
  align-items: center;
  background: ${colors.palette.neutral['075']};
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media (max-width: 768px) {
    align-items: start;
    padding: 32px 24px 48px;
  }
`;

export const Heading = styled.h1`
  ${d2.semiBold}
  color: ${colors.palette.neutral['900']};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    line-height: 125%;
  }
`;

export const Paragraph = styled.p`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 140%;
  margin-bottom: 40px;
  margin-top: 0;
  max-width: 500px;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
