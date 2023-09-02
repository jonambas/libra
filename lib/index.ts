import { fileURLToPath } from 'url';
import { Command } from 'commander';
import pkg from '../package.json';
import { start, build, preview } from './commands';
import { makeLibraConfig, LibraConfig } from './makeLibraConfig';

const program = new Command();
const dirname = fileURLToPath(new URL('..', import.meta.url));
const cwd = process.cwd();

const enrichConfig = async (options: any = {}): Promise<LibraConfig> => {
  return await makeLibraConfig({
    cwd,
    dirname,
    ...options
  });
};

program
  .name('libra')
  .description('A React component dev environment')
  .version(pkg.version);

program
  .command('start')
  .option('-o, --open', 'opens the browser')
  .option('-p, --port <port>', 'specifies a port')
  .option('-i, --inspect', 'enables vite plugin inspect')
  .description('starts the Libra app locally')
  .action(async (options) => {
    const config = await enrichConfig(options);
    await start(config);
  });

program
  .command('preview')
  .option('-o, --open', 'opens the browser')
  .option('-p, --port <port>', 'specifies a port')
  .description('preview a production build locally')
  .action(async (options) => {
    const config = await enrichConfig(options);
    await preview(config);
  });

program
  .command('build')
  .option('-o, --out', 'specifies output directory')
  .description('creates a production build')
  .action(async (options) => {
    const config = await enrichConfig(options);
    await build(config);
  });

program.parse();
