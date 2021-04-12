import React, {FC} from 'react';
import ReactPlayerYouTube from 'react-player/youtube';
import ReactPlayerVimeo from 'react-player/vimeo';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {Source} from 'types/tutorials';

import './VideoPlayer.scss';

interface VideoPlayerProps {
  className?: string;
  controls?: boolean;
  source: Source;
  videoId: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({className, controls = true, source, videoId}) => {
  return (
    <div className={clsx('VideoPlayer', className)}>
      {source === Source.youtube ? (
        <ReactPlayerYouTube
          className={clsx('VideoPlayer__player', {...bemify(className, '__player')})}
          controls={controls}
          height="100%"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
        />
      ) : (
        <ReactPlayerVimeo
          className={clsx('VideoPlayer__player', {...bemify(className, '__player')})}
          controls={controls}
          height="100%"
          url={`https://www.vimeo.com/${videoId}`}
          width="100%"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
