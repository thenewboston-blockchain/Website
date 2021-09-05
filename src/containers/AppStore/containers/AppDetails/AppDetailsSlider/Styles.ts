import styled from 'styled-components';
import {Container as SharedContainer} from 'components';

export const Container = styled.div`
  background: rgba(246, 249, 252, 0.5);
  padding: 64px;

  @media (max-width: 1366px) {
    padding: 64px 48px;
  }

  @media (max-width: 992px) {
    padding: 64px 24px;
  }
`;

export const Main = styled(SharedContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
