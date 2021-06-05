import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';

import {getPlaylists} from 'apis/tutorials';
import {EmptyPage, Loader, PageTitle} from 'components';
import {Playlist, Source} from 'types/tutorials';

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
    if (category) {
      const fetchData = async (): Promise<void> => {
        try {
          setLoading(true);
          const playlistsResponse = await getPlaylists(category);
          setPlaylists(playlistsResponse);
        } catch (error) {
          setErrorMessage(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [category]);

  const renderPlaylistGrid = useCallback((): ReactNode => {
    if (errorMessage) return <div className="Playlists__error">{errorMessage}</div>;
    if (!playlists.length) return <EmptyPage />;
    return (
      <div className="Playlists__grid">
        {playlists.map((playlist) => {
          const {instructor} = playlist;
          return (
            <PlaylistCard
              author={instructor.name}
              authorUrl={playlist.playlist_type === Source.youtube ? instructor.youtube_url : instructor.vimeo_url}
              key={playlist.pk}
              pk={playlist.pk}
              thumbnail={playlist.thumbnail}
              title={playlist.title}
              video_list={playlist.video_list}
            />
          );
        })}
      </div>
    );
  }, [errorMessage, playlists]);

  return (
    <>
      <PageTitle
        ogDescription={category ? `${category} Tutorials` : undefined}
        title={category ? `${category} Tutorials` : 'Tutorials'}
      />
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
    </>
  );
};

export default Playlists;
