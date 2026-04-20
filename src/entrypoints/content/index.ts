import { MessageType } from "@/types";
import { getSong, getSongMeta, isSongPage } from "./extractor";
import { generatePptx } from "./generator";
import { startPresentation } from "./presenter";

const matchPatterns = ["*://*.letras.com/*", "*://*.letras.mus.br/*"];

export default defineContentScript({
  matches: matchPatterns,

  main() {
    browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (!isSongPage()) return;

      switch (message.type) {
        case MessageType.GetSongMeta:
          sendResponse(getSongMeta());
          break;

        case MessageType.StartPresentation:
          startPresentation(getSong());
          break;

        case MessageType.GeneratePptx:
          generatePptx(getSong());
          break;
      }
    });
  },
});
