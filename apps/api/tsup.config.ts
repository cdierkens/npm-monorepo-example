import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    format: ["esm"],
    entryPoints: ["src/server.ts"],
    onSuccess: options.watch ? "node dist/server.js" : undefined,
    minify: !options.watch,
  };
});
