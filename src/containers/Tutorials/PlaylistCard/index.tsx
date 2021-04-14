import React, {FC, useMemo} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {TimeFormat, TutorialsUrlParams, Video} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

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

  const totalDuration = useMemo(() => video_list.reduce((acc, video) => acc + video.duration, 0), [video_list]);

  return (
    <div className="PlaylistCard" onClick={openPlaylist} role="button" tabIndex={0}>
      <div className="PlaylistCard__top">
        <img alt={title} className="PlaylistCard__thumbnail" src={thumbnail} />
      </div>
      <div className="PlaylistCard__bottom">
        <div className="PlaylistCard__title">{title}</div>
        <div className="PlaylistCard__author">
          Author: <span className="PlaylistCard__author-name">{author}</span>
        </div>
        <div className="PlaylistCard__details">
          <span className="PlaylistCard__details-videos">{video_list.length} videos</span>
          &bull;
          <span className="PlaylistCard__details-duration">{getFormattedTime(totalDuration, TimeFormat.english)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
