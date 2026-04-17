export interface Lyrics {
  title: string;
  artist: string;
  stanzas: string[][];
}

export type Song = SongMeta & SongLyrics;

export type SongMeta = {
  title: string;
  artist: string;
};

export type SongLyrics = {
  stanzas: string[][];
};
