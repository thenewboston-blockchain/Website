import {Playlist, PlaylistCategory} from 'types/tutorials';

export interface PlaylistCategoriesResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: PlaylistCategory[];
}

export interface PlaylistsResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Playlist[];
}
