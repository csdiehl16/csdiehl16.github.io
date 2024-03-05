import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://csdiehl.github.io",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  outDir: "./build",
  build: {
    assets: "astro",
  },
})
