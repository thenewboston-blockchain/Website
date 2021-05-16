import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';

import {getPlaylists, getInstructor} from 'apis/tutorials';
import {EmptyPage, Loader} from 'components';
import {Playlist, Instructor, Source} from 'types/tutorials';

import PlaylistCard from '../PlaylistCard';
import './Playlists.scss';

interface PlaylistsParams {
  category: string | null;
}
interface PlaylistState {
  instructor: Instructor;
  playlist: Playlist;
}

const Playlists: FC<PlaylistsParams> = ({category}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playlists, setPlaylists] = useState<PlaylistState[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (category) {
      const fetchData = async (): Promise<void> => {
        try {
          setLoading(true);
          const fetchedPlaylists = await getPlaylists(category);
          const fetchedPlaylistsWithInstructors = await Promise.all(
            fetchedPlaylists.map(async (fetchedPlaylist) => {
              return {instructor: await getInstructor(fetchedPlaylist.instructor), playlist: fetchedPlaylist};
            }),
          );
          setPlaylists(fetchedPlaylistsWithInstructors);
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
        {playlists.map(({instructor, playlist}) => {
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
