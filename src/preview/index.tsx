import { FC, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '__LIBRA_LAYOUT__'; // User's layout
import 'virtual:libra-entries'; // Initilizes entries
import { useColorScheme } from '@sweatpants/react';
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
  scheme?: 'light' | 'dark';
};

const Entry: FC<EntryProps> = (props) => {
  const { id, scheme } = props;

  if (id) {
    const Entry = instance.get(id)?.render;

    if (Entry) {
      return (
        <Layout scheme={scheme}>
          <Entry />
        </Layout>
      );
    }
  }

  return <Layout scheme={scheme} />;
};

const Preview: FC = () => {
  const preview = useLibraPreview();
  const [, setPrefers] = useColorScheme({ setHtmlAttribute: true });

  useEffect(() => {
    preview.scheme && setPrefers(preview.scheme);
  }, [preview.scheme]);

  return (
    <Boundary>
      <Entry {...preview} />
    </Boundary>
  );
};

const root = createRoot(out);
root.render(<Preview />);
