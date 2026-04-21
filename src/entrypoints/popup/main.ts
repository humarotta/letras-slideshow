import { type GeneratedI18nStructure, i18n } from "#i18n";
import { MessageType, type SongMeta } from "@/types";

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

function localize() {
  for (const el of $$(Selector.I18n)) {
    const key = el.dataset.i18n as keyof GeneratedI18nStructure;
    el.textContent = i18n.t(key);
  }
}

async function main() {
  try {
    localize();

    const meta = await sendToTab<SongMeta>(MessageType.GetSongMeta);
    if (!meta) return setState(State.Error);

    $(Selector.Title).textContent = meta.title;
    $(Selector.Artist).textContent = meta.artist;

    $(Selector.Present).addEventListener("click", () => {
      sendToTab(MessageType.StartPresentation);
    });

    $(Selector.Download).addEventListener("click", () => {
      sendToTab(MessageType.GeneratePptx);
    });

    setState(State.Success);
  } catch {
    setState(State.Error);
  }
}

main();
