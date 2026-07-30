export interface Song {
  id?: number;

  // Metadata
  title?: string;
  artist?: string;
  album?: string;
  albumArtist?: string;
  genre?: string;
  year?: number;
  track?: number;
  disc?: number;
  duration?: number;

  // Optional metadata
  composer?: string;

  // Playback
  addedAt: number;

  favorite?: boolean;
}

export interface File {
  id?: number;

  songId: number;

  path: string;
  filename: string;
  extension: string;

  size: number;
  modified: number;
}

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

export interface PlaylistTag {
  id?: number;

  playlistId: number;
  tagId: number;
}
