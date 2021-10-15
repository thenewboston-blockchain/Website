import styled, {keyframes} from 'styled-components';
import {Icon} from '@thenewboston/ui';

const spin = keyframes`
    0% {
        transform: rotateZ(0);
    }
    100% {
        transform: rotateZ(360deg);
    }
`;

export const Loader = styled(Icon)`
  animation: ${spin} 1s linear infinite;
`;
