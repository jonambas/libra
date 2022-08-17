import type { Plugin } from 'vite';

/**
 * Renames page titles in the html templates
 */

export const htmlPlugin = (title?: string): Plugin => {
  return {
    name: 'vite-plugin-html-title',
    transformIndexHtml: (html, ctx) => {
      const indexRegex = /libra\/index.html$/;
      const previewRegex = /libra\/preview.html$/;
      const titleRegex = /<title>(.*?)<\/title>/;

      if (ctx.filename.match(indexRegex)) {
        return html.replace(titleRegex, `<title>${title}</title>`);
      }

      if (ctx.filename.match(previewRegex)) {
        return html.replace(titleRegex, `<title>${title} | Preview</title>`);
      }
    }
  };
};
