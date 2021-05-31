import axios from 'axios';
import {allTutorialsFilter} from 'constants/tutorials';
import {PaginatedResponse} from 'types/api';
import {Instructor, Playlist, PlaylistCategory} from 'types/tutorials';
import {standardHeaders} from 'utils/requests';

export async function getPlaylistCategories(): Promise<PlaylistCategory[]> {
  const response = await axios.get<PaginatedResponse<PlaylistCategory>>(
    `${process.env.REACT_APP_BACKEND_API}/playlist_categories`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getPlaylists(category: string): Promise<Playlist[]> {
  if (category !== allTutorialsFilter.title) {
    const response = await axios.get<PaginatedResponse<Playlist>>(
      `${process.env.REACT_APP_BACKEND_API}/playlists?category=${category}`,
      standardHeaders(),
    );

    return response.data.results;
  }

  const response = await axios.get<PaginatedResponse<Playlist>>(
    `${process.env.REACT_APP_BACKEND_API}/playlists`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getPlaylist(playlistId: string): Promise<Playlist> {
  const response = await axios.get<Playlist>(
    `${process.env.REACT_APP_BACKEND_API}/playlists/${playlistId}`,
    standardHeaders(),
  );

  return response.data;
}

export async function getInstructor(instructorId: string): Promise<Instructor> {
  const response = await axios.get<Instructor>(
    `${process.env.REACT_APP_BACKEND_API}/instructors/${instructorId}`,
    standardHeaders(),
  );

  return response.data;
}
