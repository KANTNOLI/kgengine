import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/kgengine/",

  resolve: {
    alias: {
      KGEngine: path.resolve(__dirname, "./imports"),
    },
  },
});
