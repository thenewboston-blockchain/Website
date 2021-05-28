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
  categories: string[];
  description: string;
  duration_seconds: number;
  language: string;
  playlist: string | null;
  published_at: string;
  tags: string[];
  thumbnail: string;
  title: string;
  pk: string;
  video_id: string;
  video_type: Source;
}

export interface Playlist extends CreatedModified {
  categories: string[];
  description: string;
  instructor: Instructor;
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

export interface Instructor {
  pk: string;
  name: string;
  youtube_url: string;
  vimeo_url: string;
  created_date: string;
  modified_date: string;
}
