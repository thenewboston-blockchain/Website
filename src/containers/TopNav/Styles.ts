import styled, {css, keyframes} from 'styled-components';

import {Container as SharedContainer} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import zIndex from 'styles/zIndex';

const transitionBackground = keyframes`
  from {
    backdrop-filter: saturate(180%) blur(20px);
    background: rgba(255, 255, 255, 0.8);
  }
  to {
    backdrop-filter: unset;
    background: white;
  }
`;

export const Wrapper = styled.div<{isOpened?: boolean}>`
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba(255, 255, 255, 0.8);

  ${(props) =>
    props.isOpened &&
    css`
      animation: ${transitionBackground} 0.3s forwards;
    `}
`;

export const Container = styled(SharedContainer)`
  align-items: center;
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: ${NAVBAR_HEIGHT}px;
  position: relative;
  z-index: ${zIndex.topNav};
`;

export const RightSection = styled.div`
  align-items: center;
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
`;
