import styled from 'styled-components';

import colors from 'styles/colors';
import {h3, b2, b1} from 'styles/fonts';
import {fontWeightBold} from 'styles/fonts/fontWeights';

export const Container = styled.div`
  cursor: pointer;
  height: 100%;
  position: relative;
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Banner = styled.img`
  border-radius: 8px;
  height: 195px;
  object-fit: cover;
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppTitleDescriptionContainer = styled.div`
  min-height: 114px;
`;

export const AppTitle = styled.h3`
  ${h3.medium};
  color: ${colors.palette.gray['800']};
  margin-bottom: 8px;
`;

export const AppDescription = styled.p`
  ${b2.regular};
  -webkit-box-orient: vertical;
  color: ${colors.palette.gray['500']};
  display: -webkit-box;
  -webkit-line-clamp: 4; /* max number of lines to show */
  margin: 0;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AppWebsite = styled.div`
  ${b1.regular};
  align-items: center;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${colors.palette.blue['500']};
    ${fontWeightBold};
  }
`;

export const AppWebsiteText = styled.span`
  margin-right: 8px;
`;
