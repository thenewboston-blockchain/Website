import styled from 'styled-components';

import {Divider} from 'components';
import colors from 'styles/colors';
import {d0, d1, d2, h1, h3} from 'styles/fonts';
import {fontWeightLight} from 'styles/fonts/fontWeights';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  ${d0.bold};
  color: ${colors.palette.neutral['800']};
  margin-bottom: 24px;
  text-align: center;
  max-width: 670px;

  @media (max-width: 992px) {
    ${d1.bold};
  }

  @media (max-width: 768px) {
    ${d2.bold};
  }
`;

export const SubTitle = styled.h3`
  ${h3.regular};
  color: ${colors.palette.neutral['600']};
  margin-bottom: 40px;
  max-width: 670px;
  text-align: center;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  margin-bottom: 112px;
  margin-top: 100px;
  width: fit-content;

  @media (max-width: 1366px) {
    margin-bottom: 104px;
    margin-top: 88px;
  }

  @media (max-width: 992px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 96px;
    margin-top: 80px;
    max-width: 332px;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 58px;
    margin-top: 80px;
  }
`;

export const StatisticSection = styled.div`
  max-width: 350px;

  @media (max-width: 992px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StatisticTitle = styled.h3`
  ${h3.regular};
  color: ${colors.palette.neutral['600']};
  margin-bottom: 12px;
`;

export const StatisticNumber = styled.h1`
  ${d0.bold};
  color: ${colors.palette.neutral['800']};
  margin-bottom: 12px;
`;

export const StatisticDescription = styled.h1`
  ${h1.regular};
  ${fontWeightLight};
  color: ${colors.palette.neutral['600']};
`;

export const StatisticTransactionDescription = styled.h1`
  /* Note: new font size that's not within our UI library */
  font-size: 30px;
  ${fontWeightLight};
  color: ${colors.palette.neutral['800']};
  line-height: 1.5;
`;

export const StatisticDivider = styled(Divider)`
  margin: 0 32px;

  @media (max-width: 992px) {
    margin: 40px 0;
  }
`;

export const Image = styled.img`
  @media (max-width: 992px) {
    /* sweet point to fit the globe nicely to the entire screen */
    max-width: 160%;
  }
`;
