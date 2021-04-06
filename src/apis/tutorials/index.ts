import axios from 'axios';
import {Category, Playlist} from 'types/tutorials';

import {standardHeaders} from 'utils/requests';

export async function getCategories() {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/categories`, standardHeaders());
}

export async function getPlaylists(category?: Category) {
  if (category) {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/playlists?category=${category.name}`, standardHeaders());
  }
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/playlists`, standardHeaders());
}

export async function getVideos(playlist: Playlist) {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/videos?playlist=${playlist.uuid}`, standardHeaders());
}
