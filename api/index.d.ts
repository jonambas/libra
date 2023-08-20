/* eslint-disable no-var */

import type { Config, Add, Directory } from './types';

export { Config };

declare global {
  var add: Add;
  var directory: Directory;
}
