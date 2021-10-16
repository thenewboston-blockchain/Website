import styled from 'styled-components';

import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {d2, h2, h3} from 'styles/fonts';

export const Container = styled(SharedContainer)`
  display: grid;
  gap: 120px;
  grid-template-columns: repeat(4, 1fr);
  padding: 176px 0px;

  @media (max-width: 1366px) {
    padding: 160px 72px;
  }

  @media (max-width: 992px) {
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    padding: 160px 72px;
  }

  @media (max-width: 480px) {
    gap: 64px;
    grid-template-columns: repeat(1, 1fr);
    padding: 120px 24px;
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
  ${d2.medium}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 16px;
  margin-top: 20px;

  @media (max-width: 1366px) {
    font-size: 30px;
    margin-top: 24px;
  }
`;

export const ItemDescription = styled.p`
  ${h2.regular}
  color: ${colors.palette.neutral['600']};
  margin: 0px;

  @media (max-width: 1366px) {
    ${h3.regular}
  }
`;
