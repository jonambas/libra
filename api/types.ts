import type { InlineConfig } from 'vite';

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

export interface Config {
  title?: string;
  port?: number;
  open?: boolean;
  inspect?: boolean;
  layout?: string;
  outDir?: string;
  viteConfig?: () => InlineConfig;
}

export type Add = (name: string, render: () => JSX.Element) => void;
export type Directory = (name: string, callback: () => void) => void;
