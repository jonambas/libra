import { FC, MouseEventHandler, useCallback, useState, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@sweatpants/react';

import { LibraContext } from '../context/libra';
import { Folder } from '../icons';
import { useUrl } from '../hooks/useUrl';
import { css, cva } from '../../lb-system/css';
import type { Entry, GroupedEntry } from '../../../api/types';

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
        className={css({
          paddingLeft: '5',
          paddingTop: '4',
          paddingRight: '2'
        })}
      >
        <TextField
          name="search-libra"
          placeholder="Search..."
          id="search-libra"
          label="Search"
          hideLabel
          value={searchTerm}
          size="sm"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <nav
        className={css({
          height: '100%',
          overflow: 'auto',
          paddingX: '5',
          paddingTop: '5',
          paddingBottom: '8'
        })}
      >
        {empty && <span className={css({ fontSize: '4' })}>No Results</span>}
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
      <Button
        kind="bare"
        size="xs"
        onClick={() => setOpen(!open)}
        className={css({ w: '100%', marginBottom: '2' })}
      >
        <Folder
          style={{
            transform: open || containsSearchItem ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
        />
        <span className={css({ marginLeft: '1' })}>{name}</span>
      </Button>
      <div className={css({ marginLeft: '5' })}>
        {open || containsSearchItem ? (
          <FolderItem searchTerm={searchTerm} items={children} />
        ) : null}
        {open || (containsSearchItem && <div />)}
      </div>
    </div>
  );
};

const FolderItem: FC<{ items?: Array<GroupedEntry>; searchTerm?: string }> = (props) => {
  const { items, searchTerm } = props;
  if (!items) return null;
  return items.map((child: GroupedEntry) => {
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

  const selected = activeId === id;

  return (
    <div>
      <Button
        asChild
        kind="bare"
        size="xs"
        selected={selected}
        className={cva({
          base: {
            display: 'block!',
            marginBottom: '2',
            overflow: 'hidden',
            _after: {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '-15px',
              transform: 'translateY(-50%)',
              width: '6px',
              height: '6px',
              bg: 'blue10',
              borderRadius: '50%',
              transition: '0.15s',
              opacity: 0
            }
          },
          variants: {
            selected: {
              true: {
                paddingLeft: '6!',
                _after: { left: '5px', opacity: 1 }
              },
              false: {}
            }
          }
        })({ selected })}
      >
        <Link to={url} onClick={handleClick} title={name}>
          {name}
        </Link>
      </Button>
    </div>
  );
};
