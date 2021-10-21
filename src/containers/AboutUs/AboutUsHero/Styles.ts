import styled from 'styled-components';

import {Container as SharedContainer, ProgressiveImage} from 'components';
import colors from 'styles/colors';
import {d2, h3} from 'styles/fonts';

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  height: 550px;
  justify-content: center;
  padding: 72px 48px;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column-reverse;
    height: unset;
  }

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

export const LeftContainer = styled.div`
  margin-right: 112px;

  @media (max-width: 992px) {
    margin-right: 56px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100vw;
    padding: 0 32px;
    text-align: center;
  }
`;

export const AboutUsText = styled.div`
  color: ${colors.palette.gray['500']};
  display: block;
  margin-bottom: 30px;
`;

export const HeroImage = styled(ProgressiveImage)`
  height: 100%;
  max-width: 600px;
  min-width: 400px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    height: 350px;
    max-width: 100vw;
    text-align: center;
    margin-bottom: 48px;
  }
`;

export const Title = styled.h1`
  ${d2.semiBold};
  line-height: 1.25;
`;

export const Subtitle = styled.h3`
  ${h3.regular};
  color: ${colors.palette.gray['500']};
  margin-top: 30px;
`;
