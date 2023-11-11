import { useContext } from 'react';
import { LibraContext } from '../context/libra';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const { activeId, scheme } = useContext(LibraContext);
  console.log(activeId, id, scheme);

  const params = new URLSearchParams({
    entry: (id || activeId) ?? '',
    scheme: scheme ?? ''
  }).toString();

  const path = preview ? '/preview.html' : '/';
  return `${path}?${params}`;
};
