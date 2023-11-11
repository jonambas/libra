import { useContext, useMemo } from 'react';
import { LibraContext } from '../context/libra';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const { activeId, scheme } = useContext(LibraContext);

  const params = useMemo(() => {
    return new URLSearchParams({
      entry: (id || activeId) ?? '',
      scheme: scheme ?? ''
    }).toString();
  }, [id, activeId, scheme]);

  const path = preview ? '/preview.html' : '/';

  return `${path}?${params}`;
};
