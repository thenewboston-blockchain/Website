import styled from 'styled-components';

import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {b1, d2, h1, h3} from 'styles/fonts';

export const Container = styled(SharedContainer)`
  display: grid;
  gap: 120px;
  grid-template-columns: repeat(4, 1fr);
  padding: 160px 0px;

  @media (max-width: 1366px) {
    gap: 96px;
  }

  @media (max-width: 992px) {
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    padding: 104px 72px;
  }

  @media (max-width: 480px) {
    gap: 48px;
    padding: 120px 24px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ItemTitle = styled.h3`
  ${d2.semiBold}
  color: ${colors.palette.neutral['800']};
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 20px;

  @media (max-width: 1366px) {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    ${h1.bold}
  }
`;

export const ItemDescription = styled.p`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  margin: 0px;

  @media (max-width: 768px) {
    ${b1.regular}
  }
`;
