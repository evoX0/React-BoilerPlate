import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      style: path.resolve(__dirname, "src/style"),
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      utils: path.resolve(__dirname, "src/utils"),
      state: path.resolve(__dirname, "src/state"),
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async args => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
});
