import { defineConfig } from "vite";
export default defineConfig({
  base: "/kgengine/", // Matches GitHub Pages subpath
  build: {
    outDir: "dist",
    assetsDir: "assets",
  }
});