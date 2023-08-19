import { useContext, useMemo } from 'react';
import { createSearchParams } from 'react-router-dom';

import { LibraContext } from '../context/libra';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

const filterObject = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key]) {
      return { ...acc, [key]: obj[key] };
    }
    return acc;
  }, {});
};

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const { activeId } = useContext(LibraContext);

  const params = useMemo(
    () =>
      createSearchParams(
        new URLSearchParams(
          filterObject({
            entry: id || activeId
          })
        )
      ),
    [id, activeId]
  );

  const path = preview ? '/preview.html' : '/';

  return `${path}?${params}`;
};
