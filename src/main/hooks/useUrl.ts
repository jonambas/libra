import { useColorScheme } from '@sweatpants/react';

interface UseUrlOptions {
  preview?: boolean;
  id?: string;
}

export const useUrl = ({ preview, id }: UseUrlOptions = {}): string => {
  const [scheme] = useColorScheme();

  const params = new URLSearchParams({
    ...(id ? { entry: id } : {}),
    ...(scheme ? { scheme: scheme } : {})
  }).toString();

  const path = preview ? '/preview.html' : '/';
  return `${path}?${params}`;
};
