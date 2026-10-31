import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function soundsManifestPlugin() {
  const generateManifest = () => {
    const soundsDir = path.resolve(process.cwd(), 'public', 'sounds');
    if (!fs.existsSync(soundsDir)) {
      fs.mkdirSync(soundsDir, { recursive: true });
    }
    const allowedExts = new Set(['.mp3', '.wav', '.ogg', '.m4a', '.aac', '.webm']);
    const files = fs
      .readdirSync(soundsDir)
      .filter((file) => allowedExts.has(path.extname(file).toLowerCase()))
      .sort();

    const manifestPath = path.join(soundsDir, 'manifest.json');
    fs.writeFileSync(
      manifestPath,
      JSON.stringify({ updatedAt: new Date().toISOString(), files }, null, 2),
      'utf-8'
    );
  };

  return {
    name: 'sounds-manifest-generator',
    buildStart() {
      generateManifest();
    },
    configureServer(server: { watcher: { on: (event: string, cb: (file: string) => void) => void } }) {
      generateManifest();
      server.watcher.on('all', (filePath: string) => {
        if (filePath.includes(path.join('public', 'sounds')) && !filePath.endsWith('manifest.json')) {
          generateManifest();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), soundsManifestPlugin()],
  base: './',
});
