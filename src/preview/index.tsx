import { FC } from 'react';
import { createRoot } from 'react-dom/client';

import { instance } from '../../api';
import { Framecast } from 'framecast';

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

const App: FC<{ id?: string; theme?: 'light' | 'dark' | 'system' }> = (props) => {
  if (props.id) {
    const entry = instance.get(props.id);

    if (entry && entry.render) {
      return <Layout theme={props.theme}>{entry.render()}</Layout>;
    }
  }

  return <Layout theme={props.theme} />;
};

const preview = ({
  id,
  theme
}: {
  theme?: 'light' | 'dark' | 'system';
  id?: string;
} = {}) => <App id={id} theme={theme} />;

const root = createRoot(out);
root.render(preview());

framecast.on('broadcast', ({ event, data }: any) => {
  // Updates when navigation is used
  if (event === 'libra-entry') {
    root.render(
      preview({ id: data.id as string, theme: data.theme as 'light' | 'dark' | 'system' })
    );
  }

  // Handles HMR / initial load
  if (event === 'libra-load') {
    const params = new URLSearchParams(window.location.search);
    const directId = params.get('entry') ?? '';
    const directTheme = params.get('theme') ?? '';
    root.render(
      preview({ id: directId, theme: directTheme as 'light' | 'dark' | 'system' })
    );
  }
});
