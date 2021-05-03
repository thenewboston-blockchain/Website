import axios from 'axios';
import {allTutorialsFilter} from 'constants/tutorials';
import {PaginatedResponse} from 'types/api';
import {Category, Playlist} from 'types/tutorials';
import {standardHeaders} from 'utils/requests';

export async function getCategories(): Promise<Category[]> {
  const response = await axios.get<PaginatedResponse<Category>>(
    `${process.env.REACT_APP_BACKEND_API}/categories`,
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
