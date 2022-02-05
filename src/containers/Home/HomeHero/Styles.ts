import styled from 'styled-components';

import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {b1, d0, d2, h3} from 'styles/fonts';

const THUMBNAIL_MARGIN = {
  default: '8px',
  lg: '8px',
  md: '8px',
  sm: '6px',
};

const THUMBNAIL_SIZE = {
  default: '170px',
  lg: '170px',
  md: '160px',
  sm: '108px',
};

const THUMBNAIL_BORDER_RADIUS = '16px';

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 120px 0 80px;

  @media (max-width: 1366px) {
    padding: 120px 96px 80px;
  }

  @media (max-width: 992px) {
    padding: 72px 48px;
  }

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`;

export const Heading = styled.h1`
  ${d0.bold}
  color: ${colors.palette.neutral['800']};
  line-height: 130%;
  margin-bottom: 24px;
  text-align: center;
  transition: color 0.3s linear;

  @media (max-width: 992px) {
    ${d2.bold}
  }
`;

type HeadingSegmentProps = {
  highlighted?: boolean;
};

export const HeadingSegment = styled.span<HeadingSegmentProps>`
  ${(props) => props.highlighted && 'color: #0085FF;'}
  transition: color 0.3s linear;
`;

export const Paragraph = styled.p`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 150%;
  margin-bottom: 40px;
  margin-top: 0px;
  max-width: 800px;
  text-align: center;

  @media (max-width: 992px) {
    ${b1.regular}
    max-width: 560px;
  }
`;

export const Actions = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: calc((${THUMBNAIL_SIZE.default} * 5) + (${THUMBNAIL_MARGIN.default} * 10));

  @media (max-width: 1366px) {
    max-width: calc((${THUMBNAIL_SIZE.lg} * 4) + (${THUMBNAIL_MARGIN.lg} * 8));
  }

  @media (max-width: 992px) {
    max-width: calc((${THUMBNAIL_SIZE.md} * 4) + (${THUMBNAIL_MARGIN.md} * 8));
  }

  @media (max-width: 768px) {
    max-width: calc((${THUMBNAIL_SIZE.sm} * 3) + (${THUMBNAIL_MARGIN.sm} * 6));
  }
`;

export const App = styled.div`
  background-color: var(--color-gray-4);
  border-radius: ${THUMBNAIL_BORDER_RADIUS};
  cursor: pointer;
  filter: drop-shadow(0 4px 6px rgba(26, 41, 54, 0.5));
  height: ${THUMBNAIL_SIZE.default};
  margin: ${THUMBNAIL_MARGIN.default};
  transition: transform 0.3s ease;
  width: ${THUMBNAIL_SIZE.default};

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1366px) {
    height: ${THUMBNAIL_SIZE.lg};
    margin: ${THUMBNAIL_MARGIN.lg};
    width: ${THUMBNAIL_SIZE.lg};
  }

  @media (max-width: 992px) {
    height: ${THUMBNAIL_SIZE.md};
    margin: ${THUMBNAIL_MARGIN.md};
    width: ${THUMBNAIL_SIZE.md};
  }

  @media (max-width: 768px) {
    height: ${THUMBNAIL_SIZE.sm};
    margin: ${THUMBNAIL_MARGIN.sm};
    width: ${THUMBNAIL_SIZE.sm};
  }
`;

export const AppImage = styled.img`
  border-radius: ${THUMBNAIL_BORDER_RADIUS};
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
