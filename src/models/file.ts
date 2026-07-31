export interface AudioFile {
  id?: number;

  songId: number;

  path: string;
  filename: string;
  extension: string;

  size: number;
  modified: number;
}
