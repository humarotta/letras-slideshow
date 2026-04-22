import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  entrypointsDir: "entries",
  outDir: ".out",
  modules: ["@wxt-dev/auto-icons", "@wxt-dev/i18n/module"],
  manifest: {
    name: "__MSG_extension_name__",
    description: "__MSG_extension_description__",
    default_locale: "en",
  },
  webExt: {
    startUrls: [
      "https://www.letras.com/pearl-jam/30319/",
      "https://www.letras.com/pearl-jam/30327/",
    ],
  },
});
