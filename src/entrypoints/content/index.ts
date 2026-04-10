import { getLyrics } from "./extractor";
import { generatePptx } from "./generator";
import { startPresentation } from "./presenter";

export default defineContentScript({
  matches: ["*://*.letras.com/*", "*://*.letras.mus.br/*"],
  main() {
    browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.type === "GET_LYRICS") sendResponse(getLyrics());
      if (message.type === "START_PRESENTATION") startPresentation(getLyrics());
      if (message.type === "GENERATE_PPTX") generatePptx(getLyrics());
    });
  },
});
