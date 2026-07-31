export interface Playlist {
  id?: number;

  name: string;

  cover?: string;

  description?: string;

  createdAt: number;
  updatedAt: number;

  color?: string;
}

export interface PlaylistEntry {
  id?: number;

  playlistId: number;

  songId: number;

  order: number;
}
