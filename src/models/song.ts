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
