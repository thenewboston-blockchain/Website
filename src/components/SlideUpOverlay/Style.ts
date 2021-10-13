import styled, {keyframes} from 'styled-components';
import zIndex from 'styles/zIndex';

const addOverlay = keyframes`
    from {
        background: rgba(0, 0, 0, 0);
    }
    to {
        background: rgba(0, 0, 0, 0.3);
    }
}
`;

export const SlideUpOverlay = styled.div`
  animation: ${addOverlay} 0.3s forwards;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${zIndex.slideupOverlay};
`;
