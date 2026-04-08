export function hasLyrics(): boolean {
  const el = document.querySelector("#js-lyric-content .lyric-original");
  return el !== null;
}

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
