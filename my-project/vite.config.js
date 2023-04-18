import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import generateSitemap from "vite-plugin-pages-sitemap";
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      onRoutesGenerated: async (routes) => {
        const names = await getNames();
        const dynamicRoutes = names.map((name) => `/names/${name}`);
        generateSitemap({
          hostname: "https://estehdath.com/",
          routes: [...routes, ...dynamicRoutes],
          readable: true,
        });
      },
    }),
    vue(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
});
