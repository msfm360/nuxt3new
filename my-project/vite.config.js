import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// import generateSitemap from "vite-plugin-pages-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Pages({
    //   onRoutesGenerated: (routes) => generateSitemap({ routes }),
    // }),
    vue(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
});
