import type { Config } from './';
declare function add(name: string, render: () => JSX.Element): void;
declare function describe(name: string, callback: () => void): void;
export { add, describe, Config };
