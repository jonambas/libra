import type { Plugin } from 'vite';
import fg from 'fast-glob';

export const libraPlugin = async (): Promise<Plugin> => {
  const virtualId = 'virtual:libra-entries';
  const resolvedVirtualId = '\0' + virtualId;

  const entryPaths = await fg([
    `${process.cwd()}/**/*.libra.{ts,tsx,js,jsx}`,
    '!**/node_modules/**'
  ]);

  const entryFsPaths = entryPaths.map((e) => `/@fs${e}`);
  const entryImports = entryFsPaths.map((e) => `await import('${e}');`);

  return {
    name: 'vite-plugin-react-libra-entries',
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

        const init = async () => {
          await run();
          instance.load();
        }

        init();

        if (import.meta.hot) {
          import.meta.hot.accept(['${entryFsPaths.join("','")}'], () => {
            instance.reload();
          });
        }
        `;
      }
    }
  };
};
