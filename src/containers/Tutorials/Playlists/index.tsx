import React, {FC, useEffect, useState} from 'react';

import {getPlaylists} from 'apis/tutorials';
import {Loader} from 'components';
import {Playlist} from 'types/tutorials';

import PlaylistCard from '../PlaylistCard';
import './Playlists.scss';

interface PlaylistsParams {
  category: string;
}

const Playlists: FC<PlaylistsParams> = ({category}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        setLoading(true);
        const {data} = await getPlaylists(category);
        const {results: fetchedPlaylists} = data;
        setPlaylists(fetchedPlaylists);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [category]);

  return (
    <div className="Playlists">
      <div className="Playlists__header">{category}</div>
      {loading ? (
        <div className="Playlists__loader">
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Playlists;
