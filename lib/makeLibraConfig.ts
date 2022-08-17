import fs from 'fs';
import { resolve } from 'path';
import { pathToFileURL } from 'url';
import { build } from 'esbuild';
import type { Config } from '../api';

export interface LibraConfig extends Partial<Config> {
  cwd: string;
  dirname: string;
  mode: 'production' | 'development';
  inspect?: boolean;
}

const dynamicImport = new Function('file', 'return import(file)');

/**
 * Finds, builds, and returns user config file
 */
export const resolveConfig = async (cwd: string): Promise<Partial<LibraConfig>> => {
  try {
    const configPath = resolve(cwd, 'libra.config.js');

    if (!fs.existsSync(configPath)) {
      console.error('Config file not found. Using default Libra settings.');
      return {};
    }

    const result = await build({
      absWorkingDir: process.cwd(),
      entryPoints: [configPath],
      outfile: 'out.js',
      write: false,
      platform: 'node',
      bundle: true,
      format: 'cjs',
      sourcemap: 'inline'
    });

    const text = result.outputFiles[0].text;
    const fileUrl = pathToFileURL(configPath);

    // Write bundles config into a file, read it, then delete it
    fs.writeFileSync(configPath + '.bundled.js', text);
    const userConfig = (await dynamicImport(`${fileUrl}.bundled.js`)).default;
    fs.unlinkSync(configPath + '.bundled.js');

    return userConfig.default;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export const makeLibraConfig = async (cliConfig: LibraConfig): Promise<LibraConfig> => {
  const defaults: Config = {
    port: 8080,
    open: false,
    outDir: 'dist/libra',
    title: 'Libra',
    backgrounds: ['#1a1a1a', '#ffffff']
  };

  const resolvedUserConfig = await resolveConfig(cliConfig.cwd);

  return {
    ...defaults,
    ...resolvedUserConfig,
    ...cliConfig
  };
};
