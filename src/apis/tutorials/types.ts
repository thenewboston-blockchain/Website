import {Category, Playlist} from 'types/tutorials';

export interface CategoriesResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Category[];
}

export interface PlaylistsResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Playlist[];
}
