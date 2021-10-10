import styled from 'styled-components';
import {Icon} from '@thenewboston/ui';

import {Container as SharedContainer, Avatar as SharedAvatar} from 'components';
import colors from 'styles/colors';
import {b1, h2} from 'styles/fonts';
import {fontWeightBold} from 'styles/fonts/fontWeights';
import backgroundImage from '../../../assets/AppDetailsHeroBg.png';

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const Container = styled(SharedContainer)`
  padding: 48px 0;

  @media (max-width: 1366px) {
    padding: 48px;
  }

  @media (max-width: 992px) {
    padding: 24px;
  }
`;

export const BackContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: 48px;
`;

export const BackIcon = styled(Icon)`
  color: ${colors.palette.gray['900']};
  margin-right: 8px;
`;

export const BackText = styled.span`
  ${b1.regular};
  color: ${colors.palette.gray['600']};
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
`;

export const Avatar = styled(SharedAvatar)`
  margin-right: 32px;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppTitle = styled.h2`
  ${h2.medium};
  color: ${colors.palette.gray['800']};
  margin-bottom: 8px;
`;

export const AppTagline = styled.p`
  ${b1.regular};
  color: ${colors.palette.gray['500']};
  margin: 0;
  margin-bottom: 16px;
`;

export const AppWebsiteContainer = styled.div`
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
