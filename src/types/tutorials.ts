export type VideoType = 'youtube' | 'vimeo';

export interface Video {
  author: string;
  category: string[];
  created_date: string;
  description: string;
  duration: number;
  language: string;
  modified_date: string;
  playlist: string | null;
  published_at: string;
  tags: string[];
  thumbnail: string;
  title: string;
  uuid: string;
  video_id: string;
  video_type: VideoType;
}

export interface Playlist {
  author: string;
  category: string[];
  created_date: string;
  description: string;
  language: string;
  modified_date: string;
  playlist_id: string;
  playlist_type: string;
  published_at: string;
  thumbnail: string;
  title: string;
  uuid: string;
  video_list: Video[];
}
