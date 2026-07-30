export interface Tag {
  id?: number;
  name: string;
  color?: string;
}

export interface SongTag {
  id?: number;
  songId: number;
  tagId: number;
}

export interface PlaylistTag {
  id?: number;

  playlistId: number;
  tagId: number;
}
