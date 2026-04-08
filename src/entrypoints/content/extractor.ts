export function hasLyrics(): boolean {
  const el = document.querySelector("#js-lyric-content .lyric-original");
  return el !== null;
}
