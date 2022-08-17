import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import cjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const config = defineConfig({
  input: 'lib/index.ts',
  output: [
    {
      file: 'dist/cli.mjs',
      format: 'esm',
      sourcemap: true,
      banner: '#!/usr/bin/env node'
    }
  ],
  external: [...Object.keys(pkg.dependencies), 'url', 'path', 'fs'],
  plugins: [
    cjs(),
    esbuild({
      target: 'ES2020',
      platform: 'node',
      format: 'esm',
      loaders: {
        '.json': 'json'
      }
    })
  ]
});

export default config;
