/* eslint-disable no-var */
import { Framecast } from 'framecast';

import { slugify, group } from './utils';
import type { Entry, GroupedEntry } from './types';

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

const prefix = 'root';

class Libra {
  private static source: Record<string, Entry>;
  private static map: Record<string, Entry>;
  private static group: string;
  private static instance: Libra;

  public static entries: Array<GroupedEntry>;

  private constructor() {
    Libra.source = {};
    Libra.map = {};
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
      console.error(`[Libra] entry "${name}" is not unique.`);
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

  public directory = (name: string, callback: () => void): void => {
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
    const caller = Libra.source[Object.keys(Libra.source)[0]].caller;

    if (!caller) {
      window.location.reload(); // bail
    }

    // Finds entries in Libra.map that don't exist in new Libra.source map from HMR
    // Libra.source only includes individual entries from the file that was refreshed
    const dedupedEntries = Object.keys(Libra.map).reduce((acc, key) => {
      const thisCaller = Libra.map[key].caller;
      if (thisCaller !== caller) {
        return { ...acc, [key]: Libra.map[key] };
      }
      return acc;
    }, {});

    const newSource = { ...dedupedEntries, ...Libra.source };

    const entries = group(newSource, prefix);
    Libra.entries = entries;
    this.emit('libra-load', entries);

    // Source is cleared after loading for subsequent HMR renders
    // This ensures entries arent duplicated
    // There is no pre-hmr hook so we use source to stage changes
    Libra.map = newSource;
    Libra.source = {};
  };

  public get = (id: string): Entry | undefined => {
    if (!Libra.map || !Libra.map[id]) {
      console.warn(`[Libra] entry with id "${id}" not found.`);
      return undefined;
    }
    return Libra.map[id];
  };
}

export type Instance = Libra;
export const instance = Libra.getInstance();

declare global {
  var add: typeof instance.add;
  var directory: typeof instance.directory;
}

globalThis.add = instance.add;
globalThis.directory = instance.directory;
