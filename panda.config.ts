import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: ['node_modules'],

  // emitPackage: process.env.node_env === 'production' ? true : false,
  presets: ['@sweatpants/panda-preset'],

  globalCss: {
    body: {
      fontFamily: 'sans'
    }
  },

  prefix: 'lb',
  minify: true,
  clean: true,

  // The output directory for your css system
  outdir: 'src/lb-system',
  gitignore: false,
  watch: false, // Flip this for local Libra ui development
  cwd: 'src'
});
