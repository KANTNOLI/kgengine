// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/KGEngine",
  publicDir: "Assets",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.ts"), // Основной экспорт "kgengine"
        cameras: resolve(__dirname, "src/cameras.ts"), // "kgengine/cameras"
        lighting: resolve(__dirname, "src/lighting.ts"), // "kgengine/lighting"
        objects: resolve(__dirname, "src/objects.ts"), // "kgengine/engine"
        otherScripts: resolve(__dirname, "src/otherScripts.ts"), // "kgengine/engine"
        playerActions: resolve(__dirname, "src/playerActions.ts"), // "kgengine/utils"
        shaders: resolve(__dirname, "src/shaders.ts"), // "kgengine/utils"
        engine: resolve(__dirname, "src/engine.ts"), // "kgengine/engine"
      },
      output: {
        entryFileNames: "[name].js", 
        chunkFileNames: "shared/[name].js", 
        assetFileNames: "assets/[name][extname]", 
        globals: {
          three: "THREE", 
        },
      },
      external: ["three"], 
    },

    // Основные настройки библиотеки ▼
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "KGEngine", 
      fileName: (format) => {
        switch (format) {
          case "es":
            return "kgengine.mjs"; // ES Modules
          case "cjs":
            return "kgengine.cjs"; // CommonJS
          default:
            return "kgengine.js"; // Резервный вариант
        }
      },
      formats: ["es", "cjs"], // Форматы сборки
    },
    
    outDir: "dist", // Выходная директория
    emptyOutDir: true, // Очищать перед сборкой
    minify: true, // Минификация кода
    sourcemap: true, // Генерация sourcemaps
  },
});
