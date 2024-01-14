import { resolve } from 'path';
import { mergeConfig, InlineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import react from '@vitejs/plugin-react';
import fg from 'fast-glob';
import { libraPlugin } from './vitePluginLibra';
import { htmlPlugin } from './vitePluginHtml';
import type { LibraConfig } from './makeLibraConfig';

export const makeViteConfig = async (
  config: LibraConfig
): Promise<Record<string, any>> => {
  const {
    cwd,
    dirname,
    inspect: inspectEnabled,
    layout,
    mode,
    open,
    outDir,
    port,
    title,
    viteConfig
  } = config;

  const entryPaths = await fg([
    `${cwd}/**/*.libra.{ts,tsx,js,jsx}`,
    '!**/node_modules/**'
  ]);

  const inspectPlugin = inspectEnabled ? [inspect()] : [];

  const defaultConfig: InlineConfig = {
    mode,
    configFile: false,
    root: dirname,
    logLevel: 'info',
    server: {
      port,
      open,
      host: true,
      fs: {
        allow: [cwd, dirname]
      }
    },
    preview: {
      port,
      open
    },
    build: {
      outDir: resolve(cwd, outDir),
      // Suppresses warning "outDir is not inside project root and will not be emptied."
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(dirname, 'index.html'),
          preview: resolve(dirname, 'preview.html')
        },
        // Supresses module directive warning
        // See https://github.com/rollup/rollup/issues/4699
        onwarn: (warning, warn) => {
          if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
          }
          return warn;
        }
      }
    },
    plugins: [libraPlugin(), react(), htmlPlugin(title), ...inspectPlugin],
    optimizeDeps: {
      esbuildOptions: {
        target: 'ES2020'
      },
      force: true,
      exclude: [
        ...entryPaths,
        '@sweatpants/libra',
        resolve(dirname, 'src/preview/defaultLayout.tsx')
      ],
      include: ['react-dom']
    },
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@sweatpants/libra': resolve(dirname, 'api'),
        react: resolve(cwd, 'node_modules/react'),
        __LIBRA_LAYOUT__: layout
          ? resolve(cwd, layout)
          : resolve(dirname, 'src/preview/defaultLayout.tsx')
      }
    },
    define: {
      __LIBRA__: JSON.stringify({ title, debug: inspectEnabled }),
      'process.env.NODE_ENV': JSON.stringify(mode)
    }
  };

  const userConfig = viteConfig ? viteConfig() : {};
  const finalConfig = mergeConfig(defaultConfig, userConfig);
  return finalConfig;
};
