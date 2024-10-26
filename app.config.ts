import { defineConfig } from "@solidjs/start/config";
import EntryShakingPlugin from 'vite-plugin-entry-shaking';
import { resolve } from 'node:path';

export default defineConfig({
  vite: {
    plugins: [
      EntryShakingPlugin({
        targets: [
          resolve(import.meta.dirname, 'src/components'),
        ],
      }),
    ]
  }
});
