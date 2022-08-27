import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '__LIBRA_LAYOUT__'; // User's layout
import 'virtual:libra-entries'; // Initilizes entries

import { instance } from '../../api';

import { useLibraPreview } from './useLibraPreview';
import { Boundary } from './error';

// Global styling
const style = document.createElement('style');
style.innerHTML = `
  body { margin: 0; }
  * { box-sizing: border-box; }
`;
document.head.appendChild(style);

const out = document.createElement('div');
out.id = 'root';
document.body.appendChild(out);

type EntryProps = {
  id?: string;
  theme?: 'light' | 'dark';
  themePreference?: 'light' | 'dark' | 'system';
};

const Entry: FC<EntryProps> = (props) => {
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

const Preview: FC = () => {
  const preview = useLibraPreview();

  return (
    <Boundary theme={preview.theme}>
      <Entry {...preview} />
    </Boundary>
  );
};

const root = createRoot(out);
root.render(<Preview />);
