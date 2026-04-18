export type Song = SongMeta & SongLyrics;

export type SongMeta = {
  title: string;
  artist: string;
};

export type SongLyrics = {
  stanzas: string[][];
};

export enum MessageType {
  GetSongMeta = "GET_SONG_META",
  StartPresentation = "START_PRESENTATION",
  GeneratePptx = "GENERATE_PPTX",
}
