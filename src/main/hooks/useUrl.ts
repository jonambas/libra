import { useColorScheme } from '@sweatpants/react';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const [scheme] = useColorScheme();
  console.log(id, scheme);

  const params = new URLSearchParams({
    entry: id ?? '',
    scheme: scheme ?? ''
  }).toString();

  const path = preview ? '/preview.html' : '/';
  return `${path}?${params}`;
};
