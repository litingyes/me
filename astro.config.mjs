import { defineConfig } from "astro/config"

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://huix.me",
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
})