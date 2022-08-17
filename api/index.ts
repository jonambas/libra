import type { InlineConfig } from 'vite';
import { slugify, group, GroupedEntry } from './utils';
import { Framecast } from 'framecast';

const target = window.parent;
const framecast = new Framecast(target);

export type Entry = {
  group: string;
  name: string;
  id: string;
  type: 'group' | 'entry';
  render?: () => JSX.Element;
};

export interface Config {
  title?: string;
  port?: number;
  open?: boolean;
  backgrounds?: Array<string>;
  layout?: string;
  outDir?: string;
  viteConfig?: () => InlineConfig;
}

const prefix = 'root';

class Libra {
  private static source: Record<string, Entry>;
  private static map: Record<string, Entry>;
  private static group: string;
  private static instance: Libra;
  public static entries: Array<GroupedEntry>;

  private constructor() {
    Libra.source = {};
    Libra.group = prefix;
  }

  public static getInstance(): Libra {
    if (!Libra.instance) {
      Libra.instance = new Libra();
    }

    return Libra.instance;
  }

  public add = (name: string, render: () => JSX.Element): void => {
    if (!name || !render) {
      return;
    }

    const id = `${Libra.group}--${slugify(name)}`;

    if (Libra.source[id]) {
      throw new Error('Libra entry names must be unique.');
    }

    Libra.source[id] = {
      group: Libra.group,
      id,
      name,
      render,
      type: 'entry'
    };
  };

  public describe = (name: string, callback: () => void): void => {
    if (!name || !callback) {
      return;
    }

    const id = `${Libra.group}__${slugify(name)}`;

    if (Libra.source[id]) {
      throw new Error('Libra groups must be unique.');
    }

    Libra.source[id] = {
      group: Libra.group,
      name,
      id,
      type: 'group'
    };
    Libra.group = id;

    callback();

    const parts = Libra.group.split('__');
    if (parts.length > 1) {
      parts.pop();
      Libra.group = parts.join('__');
    } else {
      Libra.group = prefix;
    }
  };

  public getEntries = (): GroupedEntry[] => {
    return Libra.entries;
  };

  public load = (): void => {
    const entries = group(Libra.source, prefix);
    Libra.entries = entries;
    // console.log(entries);
    framecast.broadcast({ event: 'libra-load', data: entries });

    // Source is cleared after loading for subsequent HMR renders
    // This ensures entries arent duplicated
    // There is no pre-hmr hook so we use source to stage changes
    Libra.map = Libra.source;
    Libra.source = {};
  };

  public get = (id: string): Entry | undefined => {
    if (!Libra.map) {
      return;
    }
    return Libra.map[id];
  };
}

export type Instance = Libra;
export const instance = Libra.getInstance();
export const add = instance.add;
export const describe = instance.describe;

if (import.meta.hot) {
  import.meta.hot.accept();
}
