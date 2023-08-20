# Libra

Libra is a barebones, no-frills React component dev environment.

### Installing

```sh
npm i @sweatpants/libra --save-dev
```

If you are using TypeScript, add `@sweatpants/libra` to your `types` field, and make sure to include libra files.

```json
{
  "compilerOptions": {
    "types": ["@sweatpants/libra"]
  },
  "include": ["src/**/*.libra.tsx"]
}
```

### Creating an entry

Create a new file with a name matches `*.libra.{tsx,jsx}`.

```ts
// MyComponent.libra.tsx
import { MyComponent } from './MyComponent';

directory('My Component', () => {
  add('Default', () => {
    return <MyComponent />;
  });
});
```

### Running Libra

Add these two scripts to run libra in your `package.json` file.

```json
"scripts": {
  "start:libra": "libra start",
  "build:libra": "libra build"
}
```

### Configuring Libra

Create a `libra.config.js` file at the root of your project

```js
/**
 * @type {import('@sweatpants/libra').Config}
 */
export default {
  title: 'Example Title',
  port: 8080
};
```

### Config Options

#### `title?: string`

Sets the page title

#### `port?: number`

Which port to run the local dev server in

#### `open?: boolean`

Opens a browser window when running start

#### `inspect?: boolean`

Enables vite-plugin-inspect

#### `layout?: string`

Path to a default layout component

#### `outDir?: string`

Output directory for the build command

#### `viteConfig?: ()=> InlineConfig`

Any additional configuration you want to pass to
