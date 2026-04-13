import { type GeneratedI18nStructure, i18n } from "#i18n";

function localize() {
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n") as keyof GeneratedI18nStructure;
    el.textContent = i18n.t(key);
  }
}

localize();
