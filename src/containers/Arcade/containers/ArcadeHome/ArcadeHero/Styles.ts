import styled from 'styled-components';
import {Container as SharedContainer} from 'components';
import colors from 'styles/colors';
import {d2, h1, h3} from 'styles/fonts';

export const Background = styled.div`
  background: rgba(246, 249, 252, 0.36);
  display: flex;
  justify-content: center;
  min-height: 352px;
  overflow: hidden;
  position: relative;
`;

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  margin-right: 48px;

  @media (max-width: 1366px) {
    padding-left: 48px;
  }

  @media (max-width: 992px) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
    margin-top: 56px;
    padding: 0 24px;
  }
`;

export const TnbText = styled.h1`
  ${h1.regular};
  color: #ffcd5c;
`;

export const Title = styled.h1`
  ${d2.bold};
  line-height: 1.25;
  margin-top: 8px;
`;

export const SubTitle = styled.h2`
  ${h3.regular};
  color: ${colors.palette.gray['500']};
  line-height: 1.5;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const RightImage = styled.img`
  @media (max-width: 992px) {
    align-self: flex-end;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    bottom: -30px;
    max-width: 100%;
    position: relative;
    right: -40px;
  }
`;

export const ImageOuter = styled.img`
  max-height: 100%;
  position: absolute;
  right: 0;
`;

export const OrangeCircle = styled.div`
  background-color: #febbbaf0;
  border-radius: 50%;
  bottom: -150px;
  height: 200px;
  left: 50px;
  position: absolute;
  width: 200px;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: -165px;
    left: -20px;
  }
`;

export const YellowCircleBorder = styled.div`
  align-items: center;
  border: 1px dashed #ffcd5c;
  border-radius: 50%;
  bottom: -110px;
  display: flex;
  height: 220px;
  justify-content: center;
  left: -50px;
  position: absolute;
  width: 220px;
  z-index: 1;

  @media (max-width: 768px) {
    bottom: -135px;
    left: -90px;
  }
`;

export const YellowCircle = styled.div`
  background-color: #ffcd5c;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;
