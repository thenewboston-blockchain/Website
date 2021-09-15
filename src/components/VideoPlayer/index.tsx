import React from 'react';

import {SFC} from 'types/generic';
import {Source} from 'types/tutorials';
import {getVideoUrl} from 'utils/urls';

import * as S from './Styles';

interface VideoPlayerProps {
  controls?: boolean;
  onEnded?(): void;
  playing?: boolean;
  source: Source;
  videoId: string;
}

const VideoPlayer: SFC<VideoPlayerProps> = ({className, controls = true, onEnded, playing = true, source, videoId}) => {
  return (
    <S.Container className={className}>
      {source === Source.youtube ? (
        <S.PlayerYouTube
          className={className && `${className}__player`}
          controls={controls}
          height="100%"
          onEnded={onEnded}
          playing={playing}
          url={getVideoUrl(videoId, Source.youtube)}
          width="100%"
        />
      ) : (
        <S.PlayerVimeo
          className={className && `${className}__player`}
          controls={controls}
          height="100%"
          onEnded={onEnded}
          playing={playing}
          url={getVideoUrl(videoId, Source.vimeo)}
          width="100%"
        />
      )}
    </S.Container>
  );
};

export default VideoPlayer;
