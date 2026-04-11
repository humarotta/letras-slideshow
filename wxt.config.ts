import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  outDir: ".out",
  modules: ["@wxt-dev/auto-icons", "@wxt-dev/i18n/module"],
  manifest: {
    name: "__MSG_extension_name__",
    default_locale: "en",
  },
});
