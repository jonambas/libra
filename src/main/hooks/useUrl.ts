import { useContext, useMemo } from 'react';
import { LibraContext } from '../context/libra';
import { SettingsContext } from '../context/settings';
import { createSearchParams } from 'react-router-dom';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const { activeId } = useContext(LibraContext);
  const { themePreference } = useContext(SettingsContext);

  const params = useMemo(
    () =>
      createSearchParams(
        new URLSearchParams({
          ...(id || activeId ? { entry: id || activeId } : {}),
          ...(themePreference ? { theme: themePreference } : {})
        })
      ),
    [id, themePreference, activeId]
  );

  const path = preview ? '/preview.html' : '/';

  return `${path}?${params}`;
};
