import type { Song, SongLyrics, SongMeta } from "@/types";

enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

export const isSongPage = (): boolean => $(Selector.Lyrics) !== null;

export function getSongMeta(): SongMeta {
  return {
    title: textOf($(Selector.Title)),
    artist: textOf($(Selector.Artist)),
  };
}

export function getSongLyrics(): SongLyrics {
  return {
    stanzas: extractParagraphs($(Selector.Lyrics)),
  };
}

export function getSong(): Song {
  return {
    ...getSongMeta(),
    ...getSongLyrics(),
  };
}
