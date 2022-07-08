import styled from 'styled-components';

import {Container as SharedContainer} from 'components';

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 120px 0 80px;

  @media (max-width: 1366px) {
    padding: 120px 96px 80px;
  }

  @media (max-width: 992px) {
    padding: 72px 48px;
  }

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`;
