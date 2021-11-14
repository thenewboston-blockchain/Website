import styled from 'styled-components';

import colors from 'styles/colors';
import {h1} from 'styles/fonts';

import {Loader as SharedLoader, Container as SharedContainer} from 'components';

import * as breakpoints from 'constants/breakpoints';
import {THUMBNAIL_WIDTH_MAPPING} from './constants';

export const Wrapper = styled.div`
  background: ${colors.palette.neutral['075']};
`;

export const Container = styled(SharedContainer)`
  margin: 0 auto;
  padding: 80px 80px 120px;
  width: min-content;

  @media (max-width: 1366px) {
    padding: 72px 52px 96px;
  }

  @media (max-width: 992px) {
    padding: 72px 48px 96px;
  }

  @media (max-width: 768px) {
    padding: 48px 24px 96px;
  }
`;

export const Grid = styled.div`
  column-gap: 24px;
  display: grid;
  grid-template-columns: repeat(6, ${THUMBNAIL_WIDTH_MAPPING[breakpoints.EXTRA_LARGE_DEVICE_WIDTH]}px);
  row-gap: 40px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(4, ${THUMBNAIL_WIDTH_MAPPING[breakpoints.LARGE_DEVICE_WIDTH]}px);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, ${THUMBNAIL_WIDTH_MAPPING[breakpoints.MEDIUM_DEVICE_WIDTH]}px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, ${THUMBNAIL_WIDTH_MAPPING[breakpoints.SMALL_DEVICE_WIDTH]}px);
    row-gap: 48px;
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h1`
  ${h1.bold}
  color: ${colors.palette.neutral['900']};
  margin-bottom: 24px;
`;

export const Loader = styled(SharedLoader)`
  margin: 40px auto;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  color: ${colors.danger};
  display: flex;
  height: 64px;
  justify-content: center;
`;
