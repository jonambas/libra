import './Navigation.css';
import { FC, MouseEventHandler, useCallback, useState, useContext, useMemo } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { LibraContext } from '../context/libra';
import { Folder } from '../icons';
import { useUrl } from '../hooks/useUrl';
import type { Entry, GroupedEntry } from '../../../api/types';

import { Text } from './Text';
import { Input } from './Input';

const searchableId = (id: string) => {
  return id.replace('__', ' ').replaceAll('--', ' ').replaceAll('-', ' ').toLowerCase();
};

export const Navigation: FC = () => {
  const { entries } = useContext(LibraContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const empty = useMemo(
    () =>
      !entries ? true : !searchChildrenEntries(entries, searchTerm.trim().toLowerCase()),
    [entries, searchTerm]
  );

  if (!entries) {
    return null;
  }

  return (
    <>
      <div
        style={{
          padding: 'var(--space3)',
          paddingRight: 'var(--space1)'
        }}
      >
        <Input
          name="search-libra"
          placeholder="Search..."
          id="search-libra"
          label="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <nav className="nav">
        {empty && <span className="no-results">No Results</span>}
        {entries.map((entry, i) => {
          return <Item key={i} {...entry} searchTerm={searchTerm.trim().toLowerCase()} />;
        })}
      </nav>
    </>
  );
};

const searchChildrenEntries = (
  entries: Array<GroupedEntry>,
  searchTerm: string
): boolean => {
  return entries.reduce((acc, child) => {
    console.log(child?.id, searchableId(child?.id ?? ''), searchTerm);
    if (acc) {
      return acc;
    }

    if (child.id && searchableId(child.id).includes(searchTerm)) {
      return true;
    }

    if (child.children) {
      return searchChildrenEntries(child.children, searchTerm);
    }

    return false;
  }, false);
};

const Item: FC<
  GroupedEntry & {
    searchTerm?: string;
  }
> = (props) => {
  const { searchTerm, children, type, name, id } = props;
  const [open, setOpen] = useState<boolean>(false);

  const containsSearchItem = useMemo(() => {
    let contains = false;

    // Checks if anything is being searched
    if (!searchTerm) {
      return false;
    }

    // Checks if this folder itself matches input search
    if (id && searchableId(id).includes(searchTerm)) {
      return true;
    }

    // Checks child entries of this folder
    if (children) {
      contains = searchChildrenEntries(children, searchTerm);
    }

    return contains;
  }, [searchTerm, id, children]);

  if (searchTerm && !containsSearchItem) {
    return null;
  }

  if (type === 'entry') {
    return <EntryItem id={id} name={name} searchTerm={searchTerm} />;
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="folder">
        <Folder
          className={cx('folder-icon', open || containsSearchItem ? 'down' : 'right')}
        />
        <span style={{ marginLeft: 'var(--space0p5)' }}>{name}</span>
      </button>
      <div style={{ marginLeft: 'var(--space3p5)' }}>
        {open || containsSearchItem ? (
          <FolderItem searchTerm={searchTerm} items={children} />
        ) : null}
        {open ||
          (containsSearchItem && (
            <div
              style={{
                marginBottom: 'var(--space1)'
              }}
            />
          ))}
      </div>
    </div>
  );
};

const FolderItem: FC<{ items?: Array<GroupedEntry>; searchTerm?: string }> = (props) => {
  const { items, searchTerm } = props;
  if (!items) return null;
  return items.map((child: any) => {
    return <Item key={child.id} {...child} searchTerm={searchTerm} />;
  });
};

const EntryItem: FC<Partial<Entry> & { searchTerm?: string }> = (props) => {
  const { id, name, searchTerm } = props;
  const { activeId, loadEntry } = useContext(LibraContext);
  const url = useUrl({ id });

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(() => {
    loadEntry && loadEntry(id);
  }, [id]);

  if (id && searchTerm && !searchableId(id).includes(searchTerm)) {
    return null;
  }

  return (
    <div>
      <Link
        to={url}
        className={cx(activeId === id && 'active')}
        onClick={handleClick}
        title={name}
      >
        name
      </Link>
    </div>
  );
};
