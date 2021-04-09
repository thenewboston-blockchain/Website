import React, {FC, useEffect, useState} from 'react';

import {getPlaylist} from 'apis/tutorials';
import {Playlist} from 'types/tutorials';

import './WatchPlaylist.scss';
import {Loader} from 'components';

interface WatchPlaylistProps {
  playlistId: string;
}

const WatchPlaylist: FC<WatchPlaylistProps> = ({playlistId}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        setLoading(true);
        const {data: fetchedPlaylist} = await getPlaylist(playlistId);
        setPlaylist(fetchedPlaylist);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [playlistId]);

  if (loading) return <Loader />;
  return (
    <div className="WatchPlaylist">
      <div className="WatchPlaylist__current-video">Video</div>
      <div className="WatchPlaylist__video-list">{playlist?.title}</div>
    </div>
  );
};

export default WatchPlaylist;
