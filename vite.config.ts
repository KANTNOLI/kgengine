import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "KGEngine",
      fileName: "kgengine",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["three"],
      output: {
        globals: {
          three: "THREE"
        }
      }
    }
  }
});