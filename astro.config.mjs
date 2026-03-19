import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://huix.me",
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
})
