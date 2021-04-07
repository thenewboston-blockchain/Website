export type VideoType = 'youtube' | 'vimeo';

export interface CreatedModified {
  created_date: string;
  modified_date: string;
}

export interface Category extends CreatedModified {
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
  video_type: VideoType;
}

export interface Playlist extends CreatedModified {
  author: string;
  categories: string[];
  description: string;
  language: string;
  playlist_id: string;
  playlist_type: string;
  published_at: string;
  thumbnail: string;
  title: string;
  uuid: string;
  video_list: Video[];
}

export interface TutorialsUrlParams {
  category: string;
  playlistId: string;
}
