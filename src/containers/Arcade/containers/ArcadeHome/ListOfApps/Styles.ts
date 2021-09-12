import styled from 'styled-components';
import colors from 'styles/colors';

import {Loader as SharedLoader, Container as SharedContainer} from 'components';

const cardWidthOriginal = '373px';
const cardMinWidthOriginal = '290px';
const cardWidth992 = '432px';
const cardMinWidth992 = '330px';
const cardWidth768 = '320px';
const cardMinWidth768 = '200px';

export const Container = styled(SharedContainer)`
  column-gap: 32px;
  display: grid;
  grid-template-columns: /* eslint-disable-next-line declaration-colon-space-after */
    minmax(${cardMinWidthOriginal}, ${cardWidthOriginal}) minmax(${cardMinWidthOriginal}, ${cardWidthOriginal})
    minmax(${cardMinWidthOriginal}, ${cardWidthOriginal}) minmax(${cardMinWidthOriginal}, ${cardWidthOriginal});
  justify-content: space-between;
  justify-items: center;
  margin-bottom: 120px;
  margin-top: 104px;
  row-gap: 120px;

  @media (max-width: 1366px) {
    grid-template-columns: /* eslint-disable-next-line declaration-colon-space-after */
      minmax(${cardMinWidthOriginal}, ${cardWidthOriginal}) minmax(${cardMinWidthOriginal}, ${cardWidthOriginal})
      minmax(${cardMinWidthOriginal}, ${cardWidthOriginal});
    padding: 0 48px;
  }

  @media (max-width: 992px) {
    grid-template-columns: minmax(${cardMinWidth992}, ${cardWidth992}) minmax(${cardMinWidth992}, ${cardWidth992});
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(${cardMinWidth768}, ${cardWidth768}) minmax(${cardMinWidth768}, ${cardWidth768});
    padding: 0 24px;
    row-gap: 60px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

export const Loader = styled(SharedLoader)`
  margin: 0 auto;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  color: ${colors.danger};
  display: flex;
  height: 64px;
  justify-content: center;
`;
