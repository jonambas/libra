/* eslint-disable no-var */

import type { Config } from './';

type LibraAdd = (name: string, render: () => JSX.Element) => void;
type LibraDirectory = (name: string, callback: () => void) => void;

export { Config };

declare global {
  var add: LibraAdd;
  var directory: LibraDirectory;
}
