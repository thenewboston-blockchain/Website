import React from 'react';
import ReactPlayerYouTube from 'react-player/youtube';
import ReactPlayerVimeo from 'react-player/vimeo';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';
import {Source} from 'types/tutorials';
import {getVideoUrl} from 'utils/urls';

import './VideoPlayer.scss';

interface VideoPlayerProps {
  controls?: boolean;
  onEnded?(): void;
  playing?: boolean;
  source: Source;
  videoId: string;
}

const VideoPlayer: SFC<VideoPlayerProps> = ({className, controls = true, onEnded, playing = true, source, videoId}) => {
  return (
    <div className={clsx('VideoPlayer', className)}>
      {source === Source.youtube ? (
        <ReactPlayerYouTube
          className={clsx('VideoPlayer__player', {...bemify(className, '__player')})}
          controls={controls}
          height="100%"
          onEnded={onEnded}
          playing={playing}
          url={getVideoUrl(videoId, Source.youtube)}
          width="100%"
        />
      ) : (
        <ReactPlayerVimeo
          className={clsx('VideoPlayer__player', {...bemify(className, '__player')})}
          controls={controls}
          height="100%"
          onEnded={onEnded}
          playing={playing}
          url={getVideoUrl(videoId, Source.vimeo)}
          width="100%"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
