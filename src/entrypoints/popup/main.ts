import { type GeneratedI18nStructure, i18n } from "#i18n";
import type { Lyrics } from "@/types";

function getElementById<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

function setState(state: "loading" | "success" | "error") {
  getElementById("popup").dataset.state = state;
}

async function sendToTab<T = unknown>(type: string): Promise<T | null> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return null;

  return browser.tabs.sendMessage(tab.id, { type }) as Promise<T>;
}

async function main() {
  const lyrics = await sendToTab<Lyrics>("GET_LYRICS");
  if (!lyrics) return setState("error");

  getElementById("title").textContent = lyrics.title;
  getElementById("artist").textContent = lyrics.artist;

  getElementById("present").addEventListener("click", () => {
    sendToTab("START_PRESENTATION");
  });

  getElementById("download").addEventListener("click", () => {
    sendToTab("GENERATE_PPTX");
  });

  setState("success");
}

function localize() {
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n") as keyof GeneratedI18nStructure;
    el.textContent = i18n.t(key);
  }
}

localize();
main();
