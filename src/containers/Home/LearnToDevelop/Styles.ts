import styled from 'styled-components';
import {A} from 'components';

import colors from 'styles/colors';
import {h2, h3} from 'styles/fonts';

const sliderControlOffset = 16;

type SliderProps = {
  paddingHorizontal: number;
};

type SliderItemProps = {
  height: number;
  marginRight: number;
  width: number;
};

type SliderControlProps = {
  position: 'left' | 'right';
  height: number;
};

export const Container = styled.div`
  background: #eaf2f8;
  padding: 104px 0px 88px;
  position: relative;
  text-align: center;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 48px;

  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const Heading = styled.h2`
  ${h2.semiBold}
  color: ${colors.palette.neutral['800']};
  font-size: 30px;
`;

export const Paragraph = styled.h2`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 150%;
  margin-bottom: 48px;
  margin-top: 16px;
  max-width: 670px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Link = styled(A)`
  ${h3.medium}
  color: ${colors.quaternary};
`;

export const Slider = styled.div<SliderProps>`
  display: flex;
  overflow: hidden;
  padding: 16px ${({paddingHorizontal}) => paddingHorizontal}px;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const SliderItem = styled.div<SliderItemProps>`
  cursor: pointer;
  filter: drop-shadow(0 4px 6px rgba(26, 41, 54, 0.5));
  height: ${({height}) => height}px;
  min-width: ${({width}) => width}px;
  transition: transform 0.3s ease;

  &:not(:last-child) {
    margin-right: ${({marginRight}) => marginRight}px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const SliderThumbnail = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const SliderControl = styled.div<SliderControlProps>`
  align-items: center;
  background: rgba(234, 242, 248, 0.9);
  display: flex;
  height: ${({height}) => height + sliderControlOffset * 2}px;
  justify-content: center;
  position: absolute;
  transform: translateY(-${sliderControlOffset}px);
  width: 80px;
  z-index: 1;
  ${({position}) => (position === 'left' ? 'left: 0' : 'right: 0')}
`;

export const SliderControlImg = styled.img`
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.05);
  }
`;
