import { createRoot } from 'react-dom/client';

import { App } from './App';

const out = document.createElement('div');
out.id = 'root';
document.body.appendChild(out);

const root = createRoot(out);
const toRender = <App />;
root.render(toRender);

// Handles HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
