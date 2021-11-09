import styled, {css} from 'styled-components';

import {Carousel as ReactCarousel} from 'react-responsive-carousel';

import colors from 'styles/colors';

const sidePadding = '100px';
const sidePadding1366 = '50px';
const sidePadding992 = '32px';
const sidePadding768 = '16px';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Carousel = styled(ReactCarousel)`
  box-sizing: content-box;
  height: 500px;
  margin-bottom: 32px;
  padding: 0 ${sidePadding};
  position: relative;
  width: 800px;

  // override custom css in carousel package to enable showing of arrows
  .carousel.carousel-slider {
    overflow: visible;
  }

  @media (max-width: 1366px) {
    padding: 0 ${sidePadding1366};
  }

  @media (max-width: 992px) {
    height: 420px;
    padding: 0 ${sidePadding992};
    width: 672px;
  }

  @media (max-width: 768px) {
    max-height: 225px;
    max-width: 360px;
    padding: 0 ${sidePadding768};
    width: 100%;
  }
`;

export const MainImage = styled.img`
  height: 500px;
  margin-bottom: 32px;
  object-fit: cover;
  width: 800px;

  @media (max-width: 992px) {
    height: 420px;
    width: 672px;
  }

  @media (max-width: 768px) {
    max-height: 225px;
    max-width: 360px;
  }
`;

export const ThumbnailContainer = styled.div`
  align-items: center;
  display: flex;
  max-width: 800px;
  overflow-x: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 ${sidePadding768};
  }
`;

export const Thumbnail = styled.img<{isSelected?: boolean}>`
  border: 4px solid transparent;
  cursor: pointer;
  height: 92px;
  object-fit: cover;
  opacity: 0.5;
  width: 148px;

  ${(props) =>
    props.isSelected &&
    css`
      background: none;
      border: 4px solid ${colors.palette.neutral['200']};
      opacity: 1;
    `}

  @media (max-width: 768px) {
    height: 70px;
    width: 78px;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;
