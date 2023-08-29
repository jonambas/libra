import type { Entry, GroupedEntry } from './types';

export const slugify = (string: string): string => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

// Sort group names alphabetically, entries are not sorted
const sortByGroupName = (arr: Entry[]) =>
  arr.sort((a, b) =>
    a.type === 'group' && b.type === 'group' ? (a.name < b.name ? -1 : 1) : 0
  );

const getGroupChildren = (entries: Entry[], currentGroup: string): Entry[] => {
  const sorted = sortByGroupName(entries).sort((a, b) =>
    a.type === 'group' && b.type !== 'group' ? -1 : 1
  );

  return sorted.reduce<Entry[]>((acc, entry) => {
    if (entry.group !== currentGroup) {
      return acc;
    }

    acc.push(entry);
    return acc;
  }, []);
};

export const group = (
  source: Record<string, Entry>,
  currentGroup: string
): GroupedEntry[] => {
  const keys = Object.keys(source);
  const sourceArray = keys.map((k) => source[k]);
  const directChildren = getGroupChildren(sourceArray, currentGroup);
  const grouped = [];

  for (const child of directChildren) {
    const isEntry = source[child.id].type === 'entry';
    const entry = source[child.id];

    if (isEntry && entry.group === currentGroup) {
      grouped.push(entry);
      continue;
    }

    if (!isEntry && entry.group === currentGroup) {
      grouped.push({
        ...entry,
        children: group(source, entry.id)
      });
      continue;
    }
  }

  return sortByGroupName(grouped);
};
