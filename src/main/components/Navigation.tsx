import { FC, MouseEventHandler, useCallback, useState, useContext, useMemo } from 'react';
import cx from 'classnames';
import { useSearchParams, Link } from 'react-router-dom';

import { LibraContext } from '../context/libra';
import { css, styled } from '../stiches';
import { Folder } from '../icons';
import { Text } from './Text';
import { Input } from './Input';
import { SettingsContext } from '../context/settings';
import { useUrl } from '../hooks/useUrl';

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
        className={css({
          padding: '$3 $1 $3 $3'
        })()}
      >
        <Input
          name="search-libra"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value.trim().toLowerCase());
          }}
        />
      </div>
      <nav className={css({ height: '100%', overflow: 'auto', padding: '0 $3 $6' })()}>
        {empty && (
          <Text className={css({ fontSize: '$100', marginTop: '$2' })()}>No Results</Text>
        )}
        {entries.map((entry, i) => {
          return <Item key={i} {...entry} searchTerm={searchTerm} />;
        })}
      </nav>
    </>
  );
};

const FolderIcon = styled(Folder, {
  transition: '0.1s',
  color: '$gray500',
  variants: {
    point: {
      right: {
        transform: 'rotate(0deg)'
      },
      down: {
        transform: 'rotate(90deg)'
      }
    }
  }
});

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
      <button
        onClick={() => setOpen(!open)}
        className={css({
          display: 'inline-flex',
          alignItems: 'center',
          width: '100%',
          fontSize: '$100',
          padding: '$1',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '$sm',
          color: '$text',
          outline: 'none',
          transition: '0.1s',
          '&:hover': {
            background: '$interactiveHoverBg',
            color: '$interactiveHoverText'
          },
          '&:focus-visible, &:focus-visible *': {
            background: '$interactiveFocusBg',
            color: '$interactiveFocusText'
          }
        })()}
      >
        <FolderIcon point={open || containsSearchItem ? 'down' : 'right'} />
        <span
          className={css({
            marginLeft: '$0p5'
          })()}
        >
          <Text as="span">{name}</Text>
        </span>
      </button>
      <div
        className={css({
          marginLeft: '$3p5'
        })()}
      >
        {open || containsSearchItem ? (
          <FolderItem children={children} searchTerm={searchTerm} />
        ) : null}
        {open ||
          (containsSearchItem && (
            <div
              className={css({
                marginBottom: '$1'
              })()}
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

  const baseClassname = css({
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    fontSize: '$100',
    padding: '$1',
    marginBottom: '$0p5',
    borderRadius: '$sm',
    color: '$text',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: '0.1s',
    outline: 'none',
    '&:hover': {
      background: '$interactiveHoverBg',
      color: '$interactiveHoverText'
    },
    '&:focus-visible, &:focus-visible *': {
      background: '$interactiveFocusBg',
      color: '$interactiveFocusText'
    },
    '&:before': {
      content: '',
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '50%',
      width: '6px',
      height: '6px',
      marginTop: '-3px',
      background: '$interactiveFocusBg',
      borderRadius: '$circle',
      opacity: '0',
      transition: '0.1s'
    }
  })();

  const activeClassname = css({
    background: '$interactiveActiveBg',
    color: '$interactiveActiveText',
    paddingLeft: '$4',
    '&:hover': {
      background: '$interactiveActiveBg',
      color: '$interactiveActiveText'
    },
    '&:before': {
      opacity: '1',
      left: '$1p5'
    }
  })();

  return (
    <div>
      <Link
        to={url}
        className={cx(baseClassname, activeId === id && activeClassname)}
        onClick={handleClick}
        title={name}
      >
        <Text as="span">{name}</Text>
      </Link>
    </div>
  );
};
