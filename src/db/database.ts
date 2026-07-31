import Dexie, { type Table } from "dexie";

import type {
  Song,
  AudioFile,
  Tag,
  SongTag,
  Playlist,
  PlaylistEntry,
  PlaylistTag,
} from "@/models";

export class PlaylistDatabase extends Dexie {
  songs!: Table<Song>;
  files!: Table<AudioFile>;
  tags!: Table<Tag>;
  songTags!: Table<SongTag>;
  playlists!: Table<Playlist>;
  playlistEntries!: Table<PlaylistEntry>;
  playlistTags!: Table<PlaylistTag>;

  constructor() {
    super("playlist-maker");

    this.version(1).stores({
      songs:
        "++id, title, artist, album, albumArtist, genre, year, favorite, addedAt",

      files:
        "++id, songId, &path",

      tags:
        "++id, &name",

      songTags:
        "++id, songId, tagId, &[songId+tagId]",

      playlists:
        "++id, name, updatedAt",

      playlistEntries:
        //"++id, playlistId, songId, [playlistId+order], &[playlistId+songId]", remove song duplicates
        "++id, playlistId, songId, [playlistId+order]",

      playlistTags:
        "++id, playlistId, tagId, &[playlistId+tagId]",
    });
  }
}

export const db = new PlaylistDatabase();
