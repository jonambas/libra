import { Framecast } from 'framecast';
import { useReducer } from 'react';

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
  themePreference?: 'light' | 'dark' | 'system';
  theme?: 'light' | 'dark';
};

export const useLibraPreview = (): PreviewSettings => {
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;
  const params = new URLSearchParams(window.location.search);

  framecast.on('broadcast', ({ event, data }: any) => {
    if (event === 'libra-load' || event === 'libra-hmr') {
      forceUpdate();
    }

    if (event === 'libra-entry') {
      replace({
        entry: data.id,
        theme: data.theme,
        themePreference: data.themePreference
      });
      forceUpdate();
    }
  });

  return {
    id: params.get('entry') ?? undefined,
    theme: (params.get('theme') ?? undefined) as PreviewSettings['theme'],
    themePreference: (params.get('themePreference') ??
      undefined) as PreviewSettings['themePreference']
  };
};
