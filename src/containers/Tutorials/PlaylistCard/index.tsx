import React, {FC} from 'react';
import {Video} from 'types/tutorials';

import './PlaylistCard.scss';

interface PlaylistCardProps {
  author: string;
  title: string;
  thumbnail: string;
  video_list: Video[];
}

const PlaylistCard: FC<PlaylistCardProps> = ({author, title, thumbnail, video_list}) => {
  return (
    <div className="PlaylistCard">
      <div className="PlaylistCard__top">
        <img alt={title} className="PlaylistCard__thumbnail" src={thumbnail} />
      </div>
      <div className="PlaylistCard__bottom">
        <p className="PlaylistCard__title">{title}</p>
        <p className="PlaylistCard__author">
          Author: <span className="PlaylistCard__author-name">{author}</span>
        </p>
        <p className="PlaylistCard__details">
          <span className="PlaylistCard__details-videos">{video_list.length} videos</span>
          &bull;
          <span className="PlaylistCard__details-duration">45 min</span>
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
