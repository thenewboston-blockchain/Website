import styled, {keyframes} from 'styled-components';
import {Icon} from '@thenewboston/ui';

import zIndex from 'styles/zIndex';
import colors from 'styles/colors';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const GoToTop = styled(Icon)`
  animation: ${fadeIn} 0.3s ease-out;
  background: ${colors.palette.blue['900']};
  border-radius: 50%;
  bottom: 24px;
  color: ${colors.white};
  cursor: pointer;
  height: 36px;
  opacity: 1;
  position: fixed;
  right: 24px;
  width: 36px;
  z-index: ${zIndex.goToTop};
`;
