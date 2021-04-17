import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import {format, parseISO} from 'date-fns';

import {getPlaylist} from 'apis/tutorials';
import {EmptyPage, Loader, VideoPlayer} from 'components';
import {Playlist, Source, TimeFormat, Video} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

import './WatchPlaylist.scss';
import {Icon, IconType} from '@thenewboston/ui';

interface WatchPlaylistProps {
  playlistId: string;
}

const WatchPlaylist: FC<WatchPlaylistProps> = ({playlistId}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        setLoading(true);
        const {data: fetchedPlaylist} = await getPlaylist(playlistId);
        setPlaylist(fetchedPlaylist);
        if (fetchedPlaylist.video_list.length) {
          setCurrentVideo(fetchedPlaylist.video_list[0]);
        }
      } catch (error) {
        if (error.response.status === 404) {
          return setErrorMessage('Playlist not found!');
        }
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [playlistId]);

  const handleVideoEnd = useCallback((): void => {
    if (playlist?.video_list.length) {
      const index = playlist.video_list.findIndex((video) => video.uuid === currentVideo?.uuid);
      if (index !== -1 && index !== playlist.video_list.length - 1) {
        setCurrentVideo(playlist.video_list[index + 1]);
      }
    }
  }, [currentVideo, playlist]);

  const renderVideoList = (): ReactNode => (
    <div className="WatchPlaylist__list">
      <div className="WatchPlaylist__list-header">
        <h5 className="WatchPlaylist__list-heading">{playlist?.title}</h5>
        <div className="WatchPlaylist__list-length">{playlist?.video_list.length} videos</div>
      </div>
      <div className="WatchPlaylist__list-body">
        {playlist?.video_list.map((video, index) => (
          <div
            className={clsx(
              'WatchPlaylist__list-video',
              currentVideo?.uuid === video.uuid && 'WatchPlaylist__list-video--active',
            )}
            key={video.video_id}
            onClick={() => setCurrentVideo(video)}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === 'Enter') {
                setCurrentVideo(video);
              }
            }}
            role="button"
            tabIndex={0}
            title={video.title}
          >
            <div className="WatchPlaylist__list-video-number">
              {video.uuid === currentVideo?.uuid ? <Icon icon={IconType.play} /> : index + 1}
            </div>
            <div className="WatchPlaylist__list-video-details">
              <div className="WatchPlaylist__list-video-top">{video.title}</div>
              <div className="WatchPlaylist__list-video-bottom">
                <span className="WatchPlaylist__list-video-author">{video.author}</span>
                <span className="WatchPlaylist__list-video-duration">
                  {getFormattedTime(video.duration, TimeFormat.digital)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading)
    return (
      <div className="WatchPlaylist__loader">
        <Loader />
      </div>
    );
  if (errorMessage) return <div className="WatchPlaylist__error">{errorMessage}</div>;
  if (!playlist || !currentVideo) return <EmptyPage />;
  return (
    <div className="WatchPlaylist">
      <div className="WatchPlaylist__main">
        <VideoPlayer
          className="WatchPlaylist__video"
          onEnded={handleVideoEnd}
          source={playlist.playlist_type}
          videoId={currentVideo.video_id}
        />
        <div className="WatchPlaylist__video-details">
          <h4 className="WatchPlaylist__video-title"> {currentVideo.title} </h4>
          <div className="WatchPlaylist__video-date">
            Date Published: {format(parseISO(currentVideo.published_at), 'MMM dd, yyyy')}
          </div>
          <div className="WatchPlaylist__video-author">
            {playlist.playlist_type === Source.youtube ? 'Youtube' : 'Vimeo'} Channel:{' '}
            <span className="WatchPlaylist__video-author-name">{currentVideo.author}</span>
          </div>
        </div>
      </div>
      {renderVideoList()}
    </div>
  );
};

export default WatchPlaylist;
