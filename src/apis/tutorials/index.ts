import axios from 'axios';
import {Playlist} from 'types/tutorials';

import {standardHeaders} from 'utils/requests';

export async function getCategories() {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/categories`, standardHeaders());
}

export async function getPlaylists(category: string) {
  if (category !== 'All') {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/playlists?category=${category}`, standardHeaders());
  }
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/playlists`, standardHeaders());
}

export async function getPlaylist(playlistId: string) {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/playlists/${playlistId}`, standardHeaders());
}
