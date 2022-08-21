import type { Plugin } from 'vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import fg from 'fast-glob';

const __dirname = fileURLToPath(new URL('..', import.meta.url));

export const libraPlugin = async (): Promise<Plugin> => {
  const virtualId = 'virtual:libra-entries';
  const resolvedVirtualId = '\0' + virtualId;

  const entryPaths = await fg([
    `${process.cwd()}/**/*.libra.{ts,tsx,js,jsx}`,
    '!**/node_modules/**'
  ]);

  const entryFsPaths = entryPaths.map((e) => `/@fs${e}`);
  const entryImports = entryFsPaths.map((e) => `await import('${e}');`);

  const appPath = resolve(__dirname, 'src/main/index.tsx');

  return {
    name: 'vite-plugin-react-libra-entries',
    configureServer: (server) => {
      // Not sure if this actually is needed
      server.watcher.on('change', () => {
        const module = server.moduleGraph.getModuleById(resolvedVirtualId);
        const appModule = server.moduleGraph.getModuleById(appPath);
        if (module && appModule) {
          server.moduleGraph.invalidateModule(appModule);
        }
      });
    },
    resolveId(id: string) {
      if (id === virtualId) {
        return resolvedVirtualId;
      }
    },
    load(id: string) {
      if (id === resolvedVirtualId) {
        return `
        import { instance } from 'libra';
        const run = async () => {
          ${entryImports.join('\n')}
        }

        (async () => {
          await run();
          instance.load();
        })()

        if (import.meta.hot) {
          import.meta.hot.accept(['${entryFsPaths.join("','")}'], () => {
            instance.load();
          });
        }
        `;
      }
    }
  };
};
