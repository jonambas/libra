import type { InlineConfig } from 'vite';
import { slugify, group, GroupedEntry } from './utils';
import { Framecast } from 'framecast';

const toParent = new Framecast(window.parent);
const toPreview = new Framecast(window);

// Gets the callsite or filename that a function is invoked
// This feels a bit brittle but not sure how else to do this
// We use this only for HMR, so we can dedupe entries
const caller = (): string | undefined => {
  return new Error().stack
    ?.split('\n')
    .filter((l) => l.includes('.libra.')) // Chromium and Safari stack traces are different
    .shift()
    ?.split('?')[0]
    ?.split('/')
    .pop();
};

export type Entry = {
  group: string;
  name: string;
  id: string;
  type: 'group' | 'entry';
  render?: () => JSX.Element;
  caller?: string;
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

  private emit = (event: string, data?: any) => {
    toParent.broadcast({ event, data });
    toPreview.broadcast({ event, data });
  };

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
      type: 'entry',
      caller: caller()
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
      type: 'group',
      caller: caller()
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

  public load = (): void => {
    const entries = group(Libra.source, prefix);
    Libra.entries = entries;
    this.emit('libra-load', entries);

    // Source is cleared after loading for subsequent HMR renders
    // This ensures entries arent duplicated
    // There is no pre-hmr hook so we use source to stage changes
    Libra.map = Libra.source;
    Libra.source = {};
  };

  // Called on HMR
  // Merges old entries with new entries
  // and filters out entries with the same caller filename
  // to dedupe the old entries
  public reload = () => {
    const caller = Libra.source[Object.keys(Libra.source)[0]].caller;

    if (!caller) {
      window.location.reload(); // bail
    }

    const dedupedEntries = Object.keys(Libra.map).reduce((acc, key) => {
      const thisCaller = Libra.map[key].caller;
      if (thisCaller !== caller) {
        return { ...acc, [key]: Libra.map[key] };
      }
      return acc;
    }, {});

    Libra.map = { ...dedupedEntries, ...Libra.source };
    Libra.source = {};

    const entries = group(Libra.map, prefix);
    Libra.entries = entries;
    this.emit('libra-load', entries);
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
