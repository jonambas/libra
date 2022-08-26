import { useContext, useMemo } from 'react';
import { LibraContext } from '../context/libra';
import { SettingsContext } from '../context/settings';
import { createSearchParams } from 'react-router-dom';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

const filterObject = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (Boolean(obj[key])) {
      return { ...acc, [key]: obj[key] };
    }
    return acc;
  }, {});
};

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const { activeId } = useContext(LibraContext);
  const { theme, themePreference } = useContext(SettingsContext);

  const params = useMemo(
    () =>
      createSearchParams(
        new URLSearchParams(
          filterObject({
            entry: id || activeId,
            theme,
            themePreference
          })
        )
      ),
    [id, theme, themePreference, activeId]
  );

  const path = preview ? '/preview.html' : '/';

  return `${path}?${params}`;
};