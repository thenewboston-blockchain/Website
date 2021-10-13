import styled, {keyframes} from 'styled-components';
import zIndex from 'styles/zIndex';
import colors from 'styles/colors';

export const SlideUp = styled.div`
  bottom: 0;
  position: absolute;
  width: 100vw;
  z-index: ${zIndex.slideup};
`;

export const SlideUpContent = styled.div`
  background: ${colors.white};
  box-shadow: 0px -3px 12px rgba(4, 34, 53, 0.25);
  padding: 24px 30px 40px;
`;

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
