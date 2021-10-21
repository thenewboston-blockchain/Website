import styled from 'styled-components';

import {Container as SharedContainer, ProgressiveImage} from 'components';
import colors from 'styles/colors';
import {d2, h3} from 'styles/fonts';

export const Container = styled.div`
  background-color: rgba(214, 236, 255, 0.1);
`;

export const Wrapper = styled(SharedContainer)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 72px 48px;

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    padding: 40px 0px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 144px;
  max-width: 552px;

  @media (max-width: 992px) {
    margin-left: 96px;
  }

  @media (max-width: 768px) {
    margin-left: 40px;
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    margin-left: 0;
    margin-top: 60px;
    padding: 0 32px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  ${d2.bold};
  color: ${colors.palette.blue['900']};
  margin-bottom: 24px;
  line-height: 1.25;
`;

export const Subtitle = styled.h2`
  ${h3.regular};
  color: ${colors.palette.gray['500']};
  margin-bottom: 48px;
`;

export const Image = styled(ProgressiveImage)`
  min-width: 300px;

  @media (max-width: 414px) {
  }
`;
