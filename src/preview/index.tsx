import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { instance } from '../../api';
import { Framecast } from 'framecast';

// User's layout
import Layout from '__LIBRA_LAYOUT__';

// Initilizes entries
import 'virtual:libra-entries';

const { debug } = __LIBRA__;

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

const App: FC<{ id?: string }> = (props) => {
  if (props.id) {
    const entry = instance.get(props.id);

    if (entry && entry.render) {
      return <Layout>{entry.render()}</Layout>;
    }
  }

  return <Layout />;
};

const preview = (id?: string) => <App id={id} />;
const root = createRoot(out);
root.render(preview());

framecast.on('broadcast', ({ event, data }: any) => {
  if (debug) {
    console.log(`[libra] on ${event}`);
  }

  // Updates when navigation is used
  if (event === 'libra-entry') {
    root.render(preview(data));
  }

  // Handles HMR / initial load
  if (event === 'libra-load') {
    const params = new URLSearchParams(window.location.search);
    const directId = params.get('entry') ?? '';
    root.render(preview(directId));
  }
});
