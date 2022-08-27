import { createServer, build as viteBuild, preview as vitePreview } from 'vite';

import { makeViteConfig } from './makeViteConfig';
import type { LibraConfig } from './makeLibraConfig';

export const build = async (config: LibraConfig): Promise<void> => {
  const finalConfig = await makeViteConfig(config);
  await viteBuild(finalConfig);
};

export const start = async (config: LibraConfig): Promise<void> => {
  const finalConfig = await makeViteConfig(config);
  const server = await createServer(finalConfig);
  await server.listen();
  server.printUrls();
};

export const preview = async (config: LibraConfig): Promise<void> => {
  const finalConfig = await makeViteConfig(config);
  await viteBuild(finalConfig);
  const server = await vitePreview(finalConfig);
  server.printUrls();
};
