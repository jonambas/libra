import type { FC, PropsWithChildren } from 'react';
import type { UserConfig } from 'vite';

export type Entry = {
  group: string;
  name: string;
  id: string;
  type: 'group' | 'entry';
  render?: () => JSX.Element;
  caller?: string;
};

export type GroupedEntry = Partial<Entry> & {
  children?: Array<GroupedEntry>;
};

export type LibraLayout = FC<PropsWithChildren<{ scheme?: 'light' | 'dark' }>>;

export interface Config {
  /**
   * Sets the page title.
   * @default 'Libra'
   */
  title?: string;
  /**
   * Sets the port to run the local development server.
   * @default 9000
   */
  port?: number;
  /**
   * Opens a browser window automatically when set to `true`.
   * @default false
   */
  open?: boolean;
  /**
   * Enables `vite-plugin-inspect`
   * @see https://github.com/antfu/vite-plugin-inspect
   * @default false
   */
  inspect?: boolean;
  /**
   * Specifies the file path to a custom layout for all Libra component pages.
   */
  layout?: string;
  /**
   * Sets the output directory for `libra build`.
   * @default 'dist/libra'
   */
  outDir?: string;
  /**
   * Used to modify Vite config.
   * @see https://vitejs.dev/config/
   */
  viteConfig?: () => UserConfig;
}

export type DefineConfig = (config: Config) => Config;

export type Add = (name: string, render: () => JSX.Element) => void;
export type Directory = (name: string, callback: () => void) => void;
