/* eslint-disable no-var */

import type { Add, Directory, Config, LibraLayout } from './types';

declare global {
  var add: Add;
  var directory: Directory;
  var describe: Directory;
}

export type { Config, LibraLayout };
