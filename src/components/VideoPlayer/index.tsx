import React, {FC} from 'react';
import ReactPlayerYouTube from 'react-player/youtube';
import ReactPlayerVimeo from 'react-player/vimeo';

import {Source} from 'types/tutorials';

import './VideoPlayer.scss';

interface VideoPlayerProps {
  controls?: boolean;
  source: Source;
  videoId: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({controls = true, source, videoId}) => {
  return (
    <div className="VideoPlayer">
      {source === Source.youtube ? (
        <ReactPlayerYouTube
          className="VideoPlayer__player"
          controls={controls}
          height="100%"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
        />
      ) : (
        <ReactPlayerVimeo
          className="VideoPlayer__player"
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
