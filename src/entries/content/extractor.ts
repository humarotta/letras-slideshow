import type { Song, SongLyrics, SongMeta } from "@/types";

enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

/**
 * Returns whether the current page is a song page.
 */
export const isSongPage = memo(() => $(Selector.Lyrics) !== null);

/**
 * Returns the metadata for the song on the current page.
 */
export const getSongMeta = memo<SongMeta>(() => ({
  title: textOf($(Selector.Title)),
  artist: textOf($(Selector.Artist)),
}));

/**
 * Returns the lyrics for the song on the current page.
 */
export function getSongLyrics(): SongLyrics {
  return {
    stanzas: extractParagraphs($(Selector.Lyrics)),
  };
}

/**
 * Returns the metadata and lyrics for the song on the current page.
 */
export function getSong(): Song {
  return {
    ...getSongMeta(),
    ...getSongLyrics(),
  };
}
