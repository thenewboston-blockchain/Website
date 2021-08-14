import {A} from 'components';
import React, {FC, useMemo} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {TimeFormat, TutorialsUrlParams, Video} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

import './PlaylistCard.scss';

interface PlaylistCardProps {
  author: string;
  authorUrl: string;
  pk: string;
  thumbnail: string;
  title: string;
  video_list: Video[];
}

const PlaylistCard: FC<PlaylistCardProps> = ({author, authorUrl, pk, title, thumbnail, video_list}) => {
  const history = useHistory();
  const {category: playlistCategoryParam} = useParams<TutorialsUrlParams>();

  const openPlaylist = (): void => {
    history.push(`/tutorials/${playlistCategoryParam}/${pk}`);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      openPlaylist();
    }
  };

  const totalDuration = useMemo(() => video_list.reduce((acc, video) => acc + video.duration_seconds, 0), [video_list]);

  return (
    <div className="PlaylistCard" onClick={openPlaylist} onKeyDown={handleKeydown} role="button" tabIndex={0}>
      <div className="PlaylistCard__top">
        <img alt={title} className="PlaylistCard__thumbnail" loading="lazy" src={thumbnail} />
      </div>
      <div className="PlaylistCard__bottom">
        <div className="PlaylistCard__title">{title}</div>
        <div className="PlaylistCard__author">
          Author: <A href={authorUrl}>{author}</A>
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
