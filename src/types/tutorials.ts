export enum TimeFormat {
  digital = 'digital',
  english = 'english',
}

export enum Source {
  vimeo = 'vimeo',
  youtube = 'youtube',
}

export interface CreatedModified {
  created_date: string;
  modified_date: string;
}

export interface PlaylistCategory extends CreatedModified {
  pk: string;
  name: string;
}

export interface Video extends CreatedModified {
  author: string;
  categories: string[];
  description: string;
  duration: number;
  language: string;
  playlist: string | null;
  published_at: string;
  tags: string[];
  thumbnail: string;
  title: string;
  uuid: string;
  video_id: string;
  video_type: Source;
}

export interface Playlist extends CreatedModified {
  author: string;
  categories: string[];
  description: string;
  language: string;
  pk: string;
  playlist_id: string;
  playlist_type: Source;
  published_at: string;
  thumbnail: string;
  title: string;
  video_list: Video[];
}

export interface TutorialsUrlParams {
  category: string;
  playlistId: string;
}
