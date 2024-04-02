import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  // output: "server",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/icons",
    }),
  ],
});
