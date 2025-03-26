import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      KGEngine: path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["three/examples/jsm/libs/chevrotain.module.min.js"], 
    },
  },
});
