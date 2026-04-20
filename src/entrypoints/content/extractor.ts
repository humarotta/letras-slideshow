import type { Song, SongLyrics, SongMeta } from "@/types";

/**
 * The CSS selectors for the song elements in the Letras page.
 */
enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

/**
 * Returns whether the current page is a song page.
 */
export const isSongPage = (): boolean => $(Selector.Lyrics) !== null;

/**
 * Returns the metadata for the song on the current page.
 */
export function getSongMeta(): SongMeta {
  return {
    title: textOf($(Selector.Title)),
    artist: textOf($(Selector.Artist)),
  };
}

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
