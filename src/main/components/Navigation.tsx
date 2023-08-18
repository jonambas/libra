import './Navigation.css';
import { FC, MouseEventHandler, useCallback, useState, useContext, useMemo } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { LibraContext } from '../context/libra';
import { Folder } from '../icons';
import { useUrl } from '../hooks/useUrl';

import { Text } from './Text';
import { Input } from './Input';

const searchableId = (id: string) => {
  return id.replace('__', ' ').replace('--', ' ').toLowerCase();
};

export const Navigation: FC = () => {
  const { entries } = useContext(LibraContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!entries) {
    return null;
  }

  const empty = useMemo(
    () => !searchChildrenEntries(entries, searchTerm),
    [entries, searchTerm]
  );

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
            setSearchTerm(e.target.value.trim().toLowerCase());
          }}
        />
      </div>
      <nav className="nav">
        {empty && <Text className="no-results">No Results</Text>}
        {entries.map((entry, i) => {
          return <Item key={i} {...entry} searchTerm={searchTerm} />;
        })}
      </nav>
    </>
  );
};

const searchChildrenEntries = (children: Array<any>, searchTerm: string): boolean => {
  return children.reduce((acc, child) => {
    if (acc) {
      return acc;
    }

    if (searchableId(child.id).includes(searchTerm)) {
      return true;
    }

    if (child.children) {
      return searchChildrenEntries(child.children, searchTerm);
    }

    return false;
  }, false);
};

const Item: FC<any> = (props) => {
  const { searchTerm, children, type, name, id } = props;
  const [open, setOpen] = useState<boolean>(false);

  const containsSearchItem = useMemo(() => {
    let contains = false;

    // Checks if anything is being searched
    if (!searchTerm) {
      return false;
    }

    // Checks if this folder itself matches input search
    if (searchableId(id).includes(searchTerm)) {
      return true;
    }

    // Checks child entries of this folder
    if (children) {
      contains = searchChildrenEntries(children, searchTerm);
    }

    return contains;
  }, [searchTerm]);

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
        <span style={{ marginLeft: 'var(--space0p5)' }}>
          <Text as="span">{name}</Text>
        </span>
      </button>
      <div style={{ marginLeft: 'var(--space3p5)' }}>
        {open || containsSearchItem ? (
          <FolderItem children={children} searchTerm={searchTerm} />
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

const FolderItem: FC<any> = (props) => {
  const { children, searchTerm } = props;
  return children.map((child: any) => {
    return <Item key={child.id} {...child} searchTerm={searchTerm} />;
  });
};

const EntryItem: FC<any> = (props) => {
  const { id, name, searchTerm } = props;
  const { activeId, loadEntry } = useContext(LibraContext);
  const url = useUrl({ id });

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(() => {
    loadEntry && loadEntry(id);
  }, [id]);

  if (searchTerm && !searchableId(id).includes(searchTerm)) {
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
        <Text as="span">{name}</Text>
      </Link>
    </div>
  );
};
