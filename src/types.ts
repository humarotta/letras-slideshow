/**
 * A song, combining its metadata and lyrics.
 */
export type Song = SongMeta & SongLyrics;

/**
 * The metadata that identifies a song.
 */
export type SongMeta = {
  title: string;
  artist: string;
};

/**
 * The lyrics of a song, structured as a two-dimensional array of stanzas and
 * their verses.
 */
export type SongLyrics = {
  stanzas: string[][];
};

/**
 * The message types used to communicate with the content script.
 */
export enum MessageType {
  GetSongMeta = "GET_SONG_META",
  StartPresentation = "START_PRESENTATION",
  GeneratePptx = "GENERATE_PPTX",
}
