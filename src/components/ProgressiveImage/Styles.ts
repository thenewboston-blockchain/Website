import styled, {css} from 'styled-components';

interface ProgressiveImageProps {
  IsLoaded?: boolean;
}

const CenteredPosition = css`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ProgressiveImageContainer = styled.div`
  position: relative;
`;

export const ProgressiveImagePlaceholder = styled.img<ProgressiveImageProps>`
  ${CenteredPosition}
  filter: blur(20px);
  height: 100%;
  object-fit: contain;
  opacity: ${({IsLoaded}) => (IsLoaded ? '0' : '1')};
  width: 100%;
`;

export const ProgressiveImageReal = styled.img<ProgressiveImageProps>`
  ${CenteredPosition}
  filter: ${({IsLoaded}) => (IsLoaded ? 'blur(0px)' : 'blur(20px)')};
  height: 100%;
  object-fit: contain;
  transition: filter 0.75s linear;
  width: 100%;
`;
