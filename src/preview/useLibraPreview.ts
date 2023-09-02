import { Framecast } from 'framecast';
import { useEffect, useReducer } from 'react';

const framecast = new Framecast(window.parent);

const replace = (params: Record<string, any>): void => {
  const search = new URLSearchParams(params).toString();
  window.history.replaceState(
    null,
    '',
    `${window.location.origin}/preview.html?${search}`
  );
};

/**
 * The flow:
 * Broadcast event from Main -> Replace query params on preview
 *                           -> Store entry and settings
 */

type PreviewSettings = {
  id?: string;
  scheme?: 'light' | 'dark';
};

export const useLibraPreview = (): PreviewSettings => {
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const handler = ({ event, data }: any) => {
      if (event === 'libra-load') {
        forceUpdate();
      }

      if (event === 'libra-entry') {
        replace({
          entry: data.id,
          scheme: data.scheme
        });
        forceUpdate();
      }
    };

    framecast.on('broadcast', handler);

    return () => {
      framecast.off('broadcast', handler);
    };
  }, []);

  return {
    id: params.get('entry') ?? undefined,
    scheme: (params.get('scheme') as PreviewSettings['scheme']) ?? undefined
  };
};
