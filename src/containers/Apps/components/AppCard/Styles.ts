import styled from 'styled-components';

import colors from 'styles/colors';
import {h3, b2, h2, b1} from 'styles/fonts';

type ThumbnailsProps = {
  size: number;
};

export const Container = styled.div`
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Thumbnail = styled.img<ThumbnailsProps>`
  border-radius: 12px;
  height: ${(props) => props.size}px;
  object-fit: cover;
  width: ${(props) => props.size}px;
`;

export const BottomContainer = styled.div`
  margin-top: 24px;
`;

export const AppTitle = styled.h3`
  ${h3.medium}
  color: ${colors.palette.neutral['900']};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    ${h2.medium}
  }
`;

export const AppCategory = styled.p`
  ${b2.regular}
  color: ${colors.palette.neutral['500']};
  margin: 0;

  @media (max-width: 768px) {
    ${b1.regular}
  }
`;
