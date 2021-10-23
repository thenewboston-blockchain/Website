import styled from 'styled-components';

import {A as AComponent, Button as ButtonComponent, Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {d0, d1, d2, h3} from 'styles/fonts';

export const Wrapper = styled.div`
  background: #eaf2f8;
  display: grid;
  overflow: hidden;
  padding: 120px 0;
  place-items: center;

  @media (max-width: 992px) {
    padding: 72px 48px;
  }

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`;

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 80px;

  @media (max-width: 1366px) {
    margin-left: 0px;
  }

  @media (max-width: 992px) {
    margin-bottom: 72px;
    text-align: center;
  }

  @media (max-width: 992px) {
    margin-bottom: 56px;
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

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  filter: drop-shadow(0px 10px 40px rgba(26, 41, 54, 0.25));
  height: auto;
  max-width: 800px;

  @media (max-width: 1366px) {
    margin-left: -80px;
    max-width: 100%;
  }

  @media (max-width: 992px) {
    margin-bottom: -264px;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: -96px;
  }
`;
