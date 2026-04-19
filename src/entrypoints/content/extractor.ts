import type { Song } from "@/types";

enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

export const isSongPage = (): boolean => $(Selector.Lyrics) !== null;

export function getTitle(): string {
  const el = document.querySelector("#js-lyric-content h1");
  if (!el) return "";

  return el.textContent?.trim() ?? "";
}

export function getArtist(): string {
  const el = document.querySelector("#js-lyric-content h2");
  if (!el) return "";

  return el.textContent?.trim() ?? "";
}

export function getStanzas(): string[][] {
  const el = document.querySelector("#js-lyric-content .lyric-original");
  if (!el) return [];

  const stanzas: string[][] = [];

  for (const p of el.querySelectorAll("p")) {
    const verses: string[] = [];

    for (let line of ((p as HTMLElement).innerText || "").split("\n")) {
      line = line.trim();
      if (line !== "") verses.push(line);
    }

    if (verses.length > 0) stanzas.push(verses);
  }

  return stanzas;
}

export function getSong(): Song | null {
  if (!isSongPage()) return null;

  return {
    title: getTitle(),
    artist: getArtist(),
    stanzas: getStanzas(),
  };
}
