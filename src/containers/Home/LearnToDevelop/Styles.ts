import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

import colors from 'styles/colors';
import {h2, h3} from 'styles/fonts';

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
  padding: 104px 0px;
  position: relative;
  text-align: center;
`;

export const Content = styled.div`
  padding: 0px 48px;

  @media (max-width: 768px) {
    padding: 0px 32px;
  }
`;

export const Heading = styled.h2`
  ${h2.bold}
  color: ${colors.palette.neutral['800']};
  font-size: 30px;
`;

export const Paragraph = styled.h2`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 150%;
  margin-bottom: 64px;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Link = styled(RouterLink)`
  ${h3.medium}
  color: ${colors.quaternary};
`;

export const Slider = styled.div<SliderProps>`
  display: flex;
  overflow: hidden;
  padding: 0px ${({paddingHorizontal}) => paddingHorizontal}px;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const SliderItem = styled.div<SliderItemProps>`
  cursor: pointer;
  height: ${({height}) => height}px;
  min-width: ${({width}) => width}px;

  &:not(:last-child) {
    margin-right: ${({marginRight}) => marginRight}px;
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
  height: ${({height}) => height}px;
  justify-content: center;
  position: absolute;
  width: 80px;
  ${({position}) => (position === 'left' ? 'left: 0' : 'right: 0')}
`;

export const SliderControlImg = styled.img`
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.05);
  }
`;
