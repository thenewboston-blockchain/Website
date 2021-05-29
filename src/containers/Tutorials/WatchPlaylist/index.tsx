import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {getPlaylist} from 'apis/tutorials';
import {A, EmptyPage, Loader, PageTitle, VideoPlayer} from 'components';
import {Instructor, Playlist, Source, TimeFormat, Video} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

import './WatchPlaylist.scss';
import {Icon, IconType} from '@thenewboston/ui';

interface WatchPlaylistProps {
  playlistId: string;
}

const WatchPlaylist: FC<WatchPlaylistProps> = ({playlistId}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const playlistResponse = await getPlaylist(playlistId);
        setPlaylist(playlistResponse);
        setInstructor(playlistResponse.instructor);
        if (playlistResponse.video_list.length) {
          setCurrentVideo(playlistResponse.video_list[0]);
        }
      } catch (error) {
        if (error.response.status === 404) {
          return setErrorMessage('Playlist not found!');
        }
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [playlistId]);

  const handleVideoEnd = useCallback((): void => {
    if (playlist?.video_list.length) {
      const index = playlist.video_list.findIndex((video) => video.pk === currentVideo?.pk);
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
              currentVideo?.pk === video.pk && 'WatchPlaylist__list-video--active',
            )}
            key={video.video_id}
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentVideo(video);
            }}
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
              {video.pk === currentVideo?.pk ? <Icon icon={IconType.play} /> : index + 1}
            </div>
            <div className="WatchPlaylist__list-video-details">
              <div className="WatchPlaylist__list-video-top">{video.title}</div>
              <div className="WatchPlaylist__list-video-bottom">
                <span className="WatchPlaylist__list-video-author">{instructor?.name}</span>
                <span className="WatchPlaylist__list-video-duration">
                  {getFormattedTime(video.duration_seconds, TimeFormat.digital)}
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
    <>
      <PageTitle
        ogDescription={currentVideo.description || undefined}
        title={`${currentVideo.title} | ${playlist.title}`}
      />
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
              {instructor && (
                <A href={playlist.playlist_type === Source.youtube ? instructor.youtube_url : instructor.vimeo_url}>
                  {instructor.name}
                </A>
              )}
            </div>
          </div>
        </div>
        {renderVideoList()}
      </div>
    </>
  );
};

export default WatchPlaylist;
