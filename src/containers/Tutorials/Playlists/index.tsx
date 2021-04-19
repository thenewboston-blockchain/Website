import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';

import {getPlaylists} from 'apis/tutorials';
import {EmptyPage, Loader} from 'components';
import {Playlist} from 'types/tutorials';

import PlaylistCard from '../PlaylistCard';
import './Playlists.scss';

interface PlaylistsParams {
  category: string | null;
}

const Playlists: FC<PlaylistsParams> = ({category}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        if (category) {
          setLoading(true);
          const {data} = await getPlaylists(category);
          const {results: fetchedPlaylists} = data;
          setPlaylists(fetchedPlaylists);
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [category]);

  const renderPlaylistGrid = useCallback((): ReactNode => {
    if (errorMessage) return <div className="Playlists__error">{errorMessage}</div>;
    if (!playlists.length) return <EmptyPage />;
    return (
      <div className="Playlists__grid">
        {playlists.map(({author, title, thumbnail, video_list, uuid}) => (
          <PlaylistCard
            author={author}
            key={uuid}
            title={title}
            thumbnail={thumbnail}
            uuid={uuid}
            video_list={video_list}
          />
        ))}
      </div>
    );
  }, [errorMessage, playlists]);

  return (
    <div className="Playlists">
      <div className="Playlists__header">{category}</div>
      {loading ? (
        <div className="Playlists__loader">
          <Loader />
        </div>
      ) : (
        renderPlaylistGrid()
      )}
    </div>
  );
};

export default Playlists;
