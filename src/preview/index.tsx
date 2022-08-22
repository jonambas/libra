import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Framecast } from 'framecast';
import { instance } from '../../api';

// User's layout
import Layout from '__LIBRA_LAYOUT__';

// Initilizes entries
import 'virtual:libra-entries';

// Global styling
const style = document.createElement('style');
style.innerHTML = `
  body { margin: 0; }
  * { box-sizing: border-box; }
`;
document.head.appendChild(style);

const framecast = new Framecast(window.parent);

const out = document.createElement('div');
out.id = 'root';
document.body.appendChild(out);

type ThemePreference = 'light' | 'dark' | 'system';
type Theme = 'light' | 'dark';
type Options = {
  id?: string;
  theme?: Theme;
  themePreference?: ThemePreference;
};

const App: FC<Options> = (props) => {
  const { id, theme, themePreference } = props;

  if (id) {
    const entry = instance.get(id);

    if (entry && entry.render) {
      return (
        <Layout theme={theme} themePreference={themePreference}>
          {entry.render()}
        </Layout>
      );
    }
  }

  return <Layout theme={theme} themePreference={themePreference} />;
};

const preview = ({ id, theme, themePreference }: Options = {}) => (
  <App id={id} theme={theme} themePreference={themePreference} />
);

const root = createRoot(out);
root.render(preview());

framecast.on('broadcast', ({ event, data }: any) => {
  console.log('broadcast', event);
  // Updates when navigation is used
  if (event === 'libra-entry') {
    root.render(
      preview({
        id: data.id,
        theme: data.theme,
        themePreference: data.themePreference
      })
    );
  }

  // Handles HMR / initial load of solo iframe
  if (event === 'libra-load') {
    console.log('load preview');
    const params = new URLSearchParams(window.location.search);
    const entry = params.get('entry') ?? '';
    // const theme = (params.get('theme') ?? 'light') as Theme;
    // const themePreference = (params.get('themePreference') ??
    //   'system') as ThemePreference;

    // if (entry) {
    // root.unmount();
    root.render(
      preview({
        id: entry
        // theme: theme,
        // themePreference: themePreference
      })
    );
    // }
  }
});
