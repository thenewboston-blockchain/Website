import styled from 'styled-components';

import colors from 'styles/colors';
import {d0, d2, h4} from 'styles/fonts';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.palette.neutral['075']};
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

export const TNBText = styled.p`
  ${h4.medium}
  color: ${colors.quaternary};
  margin-bottom: 8px;
`;

export const RoadmapTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RoadmapText = styled.h1`
  ${d0.bold}
  color: ${colors.palette.neutral['800']};

  @media (max-width: 768px) {
    ${d2.bold}
  }
`;

export const RoadmapArrow = styled.img`
  @media (max-width: 768px) {
    max-width: 180px;
  }
`;
