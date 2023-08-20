import { FC } from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import Layout from '__LIBRA_LAYOUT__'; // User's layout
// eslint-disable-next-line import/no-unresolved
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
};

const Entry: FC<EntryProps> = (props) => {
  const { id } = props;

  if (id) {
    const Entry = instance.get(id)?.render;

    if (Entry) {
      return (
        <Layout>
          <Entry />
        </Layout>
      );
    }
  }

  return <Layout />;
};

const Preview: FC = () => {
  const preview = useLibraPreview();

  return (
    <Boundary>
      <Entry {...preview} />
    </Boundary>
  );
};

const root = createRoot(out);
root.render(<Preview />);
