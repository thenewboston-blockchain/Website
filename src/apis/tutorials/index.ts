import axios, {AxiosResponse} from 'axios';
import {allTutorialsFilter} from 'constants/tutorials';
import {Playlist} from 'types/tutorials';
import {standardHeaders} from 'utils/requests';

import {CategoriesResponse, PlaylistsResponse} from './types';

export async function getCategories(): Promise<AxiosResponse<CategoriesResponse>> {
  return axios.get<CategoriesResponse>(`${process.env.REACT_APP_BACKEND_API}/categories`, standardHeaders());
}

export async function getPlaylists(category: string): Promise<AxiosResponse<PlaylistsResponse>> {
  if (category !== allTutorialsFilter.title) {
    return axios.get<PlaylistsResponse>(
      `${process.env.REACT_APP_BACKEND_API}/playlists?category=${category}`,
      standardHeaders(),
    );
  }
  return axios.get<PlaylistsResponse>(`${process.env.REACT_APP_BACKEND_API}/playlists`, standardHeaders());
}

export async function getPlaylist(playlistId: string): Promise<AxiosResponse<Playlist>> {
  return axios.get<Playlist>(`${process.env.REACT_APP_BACKEND_API}/playlists/${playlistId}`, standardHeaders());
}
