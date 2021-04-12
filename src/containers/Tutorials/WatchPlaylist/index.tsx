import React, {FC, ReactNode, useEffect, useState} from 'react';
import {format, parseISO} from 'date-fns';

import {getPlaylist} from 'apis/tutorials';
import {Playlist, Video} from 'types/tutorials';

import './WatchPlaylist.scss';
import {Loader, VideoPlayer} from 'components';

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
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [playlistId]);

  const renderVideoList = (): ReactNode => (
    <div className="WatchPlaylist__list">
      <div className="WatchPlaylist__list-header">
        <h5 className="WatchPlaylist__list-heading">{playlist?.title}</h5>
        <p className="WatchPlaylist__list-length">{playlist?.video_list.length} videos</p>
      </div>
      <div className="WatchPlaylist__list-body">
        {playlist?.video_list.map((video, index) => (
          <div className="WatchPlaylist__list-video" key={video.video_id}>
            <div className="WatchPlaylist__list-video-number">{index + 1}</div>
            <div className="WatchPlaylist__list-video-details">
              <div className="WatchPlaylist__list-video-top">{video.title}</div>
              <div className="WatchPlaylist__list-video-bottom">
                <span className="WatchPlaylist__list-video-author">{video.author}</span>
                <span className="WatchPlaylist__list-video-duration">{video.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) return <Loader />;
  if (!playlist || !currentVideo) return <p>Failed to load video!</p>;
  return (
    <div className="WatchPlaylist">
      <div className="WatchPlaylist__main">
        <VideoPlayer className="WatchPlaylist__video" source={playlist.playlist_type} videoId={currentVideo.video_id} />
        <div className="WatchPlaylist__video-details">
          <h4 className="WatchPlaylist__video-title"> {currentVideo.title} </h4>
          <p className="WatchPlaylist__video-date">
            Date Published: {format(parseISO(currentVideo.published_at), 'MMM dd, yyyy')}{' '}
          </p>
          <p className="WatchPlaylist__video-author">
            Youtube Channel: <span className="WatchPlaylist__video-author-name">{currentVideo.author}</span>
          </p>
        </div>
      </div>
      {renderVideoList()}
    </div>
  );
};

export default WatchPlaylist;
