import React, {FC} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {TutorialsUrlParams, Video} from 'types/tutorials';

import './PlaylistCard.scss';

interface PlaylistCardProps {
  author: string;
  title: string;
  thumbnail: string;
  uuid: string;
  video_list: Video[];
}

const PlaylistCard: FC<PlaylistCardProps> = ({author, title, thumbnail, uuid, video_list}) => {
  const history = useHistory();
  const {category: categoryParam} = useParams<TutorialsUrlParams>();

  const openPlaylist = (): void => {
    history.push(`/tutorials/${categoryParam}/${uuid}`);
  };

  return (
    <div className="PlaylistCard" onClick={openPlaylist} role="button" tabIndex={0}>
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
