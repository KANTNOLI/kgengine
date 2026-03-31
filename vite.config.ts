import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "index.ts"),
        cameras: resolve(__dirname, "cameras.ts"),
        engine: resolve(__dirname, "engine.ts"),
        lighting: resolve(__dirname, "lighting.ts"),
        objects: resolve(__dirname, "objects.ts"),
        otherScripts: resolve(__dirname, "otherScripts.ts"),
        playerActions: resolve(__dirname, "playerActions.ts"),
        shaders: resolve(__dirname, "shaders.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["three"],
      output: {
        globals: {
          three: "THREE",
        },
      },
    },
  },
});