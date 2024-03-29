import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/main/**/*.tsx'],

  // Files to exclude
  exclude: ['node_modules', 'tests'],

  // emitPackage: process.env.node_env === 'production' ? true : false,
  presets: ['@sweatpants/panda-preset'],

  globalCss: {
    body: {
      fontFamily: 'sans'
    }
  },

  prefix: 'lb',
  hash: false,
  minify: false,
  clean: true,

  gitignore: false,
  watch: false // Flip this for local Libra ui development
});
