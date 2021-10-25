import styled from 'styled-components';
/* Player ratio: 100 / (1280 / 720) */
export const VideoPlayer = styled.div`
  padding-top: 56.25%;
  position: relative;

  &__player {
    left: 0;
    position: absolute;
    top: 0;
  }
`;
