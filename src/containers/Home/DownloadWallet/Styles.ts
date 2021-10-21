import styled from 'styled-components';

import {A as AComponent, Button as ButtonComponent} from 'components';
import colors from 'styles/colors';
import {d0, d1, d2, h3} from 'styles/fonts';

export const Container = styled.div`
  background: #eaf2f8;
  height: 800px;
  overflow: hidden;
  padding: 0 24px;
  position: relative;

  @media (max-width: 1366px) {
    height: 596px;
  }

  @media (max-width: 992px) {
    height: 650px;
  }

  @media (max-width: 768px) {
    height: 570px;
  }

  @media (max-width: 380px) {
    height: 500px;
  }
`;

export const Content = styled.div`
  left: 60%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1366px) {
    left: 50%;
  }

  @media (max-width: 992px) {
    padding: 72px 0;
    position: static;
    text-align: center;
    transform: translateY(0%);
  }
`;

export const Heading = styled.h2`
  ${d0.bold}
  color: ${colors.palette.gray['800']};
  margin-bottom: 40px;

  @media (max-width: 1366px) {
    ${d1.bold}
  }

  @media (max-width: 768px) {
    ${d2.bold}
  }
`;

export const Paragraph = styled.p`
  ${h3.regular}
  color: ${colors.palette.gray['600']};
  margin-bottom: 4px;
`;

export const A = styled(AComponent)`
  ${h3.medium}
  color: ${colors.quaternary};
  display: block;
  margin-bottom: 40px;
`;

export const Button = styled(ButtonComponent)`
  background: ${colors.white};
`;

export const Image = styled.img`
  filter: drop-shadow(0px 10px 40px rgba(26, 41, 54, 0.25));
  height: auto;
  left: -40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 894px;

  @media (max-width: 1560px) {
    left: -120px;
  }

  @media (max-width: 1366px) {
    left: -80px;
    width: 549px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  bottom: -80px;
  display: none;
  filter: drop-shadow(0px 10px 40px rgba(26, 41, 54, 0.25));
  height: auto;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 600px;

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 768px) {
    bottom: -60px;
    width: 420px;
  }

  @media (max-width: 478px) {
    bottom: -40px;
    width: 360px;
  }

  @media (max-width: 380px) {
    bottom: -40px;
    width: 320px;
  }
`;
