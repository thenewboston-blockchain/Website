import styled, {css} from 'styled-components';
import ReactPlayerYouTube from 'react-player/youtube';
import ReactPlayerVimeo from 'react-player/vimeo';

/* Player ratio: 100 / (1280 / 720) */
export const Container = styled.div`
  padding-top: 56.25%;
  position: relative;
`;

const playerStyles = css`
  left: 0;
  position: absolute;
  top: 0;
`;

export const PlayerYouTube = styled(ReactPlayerYouTube)`
  ${playerStyles}
`;

export const PlayerVimeo = styled(ReactPlayerVimeo)`
  ${playerStyles}
`;
