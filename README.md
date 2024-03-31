# Libra

Libra is a barebones, no-frills React component dev environment.

---

### Note

Libra is a personal side project and should be considered as such. While efforts have been made to ensure functionality and reliability, it is important to note that Libra is not actively maintained or recommended for production use. Use at your own discretion.

---

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

Create a `libra.config.ts` file at the root of your project

```js
import { defineConfig } from '@sweatpants/libra/config';

export default defineConfig({
  title: 'Example Title',
  port: 8080
});
```

### Config Options

#### `title?: string`

Sets the page title. Defaults to `"Libra"`.

#### `port?: number`

Sets the port to run the local development server with `libra start`. Defaults to `9000`.

#### `open?: boolean`

Opens a browser window when running the local development server with `libra start`. Defaults to `false`.

#### `inspect?: boolean`

Enables [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect).

#### `layout?: string`

Specifies the file path to a custom layout for all Libra component pages.

Example layout file:

```tsx
import type { LibraLayout } from '@sweatpants/libra';

const Layout: LibraLayout = ({ children, scheme }) => {
  if (!children) {
    return <>This will render on the home page when no entry is active.</>;
  }

  return <>{children}</>;
};

export default Layout;
```

#### `outDir?: string`

Sets the output directory for `libra build`. Defaults to `"dist/libra"`.

#### `viteConfig?: () => UserConfig`

Used to modify [Vite's config](https://vitejs.dev/config/).
