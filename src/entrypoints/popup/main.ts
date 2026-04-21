import { type GeneratedI18nStructure, i18n } from "#i18n";
import type { Song } from "@/types";

enum State {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

enum Selector {
  Popup = "#popup",
  Title = "#title",
  Artist = "#artist",
  Present = "#present",
  Download = "#download",
  I18n = "[data-i18n]",
}

function getElementById<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

const setState = (state: State) => ($(Selector.Popup).dataset.state = state);

async function main() {
  const song = await sendToTab<Song>("GET_LYRICS");
  if (!song) return setState(State.Error);

  getElementById("title").textContent = song.title;
  getElementById("artist").textContent = song.artist;

  getElementById("present").addEventListener("click", () => {
    sendToTab("START_PRESENTATION");
  });

  getElementById("download").addEventListener("click", () => {
    sendToTab("GENERATE_PPTX");
  });

  setState(State.Success);
}

function localize() {
  for (const el of $$(Selector.I18n)) {
    const key = el.dataset.i18n as keyof GeneratedI18nStructure;
    el.textContent = i18n.t(key);
  }
}

localize();
main();
