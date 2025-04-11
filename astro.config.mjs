// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // site: "https://topshelf.healthbodybalance.org",
  // base: "/topshelf/",

  site: "https://topshelf.healthbodybalance.org",
  base: "/",
});
