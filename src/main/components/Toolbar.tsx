import { FC, useContext } from 'react';
import { Button, ButtonGroup } from '@sweatpants/react';
import { Open } from '../icons';
import { css } from '../../lb-system/css';
import { SettingsContext } from '../context/settings';
import { useUrl } from '../hooks/useUrl';
import { LibraContext } from '../context/libra';

export const Toolbar: FC = () => {
  const { hideSidebar, toggleSidebar, setColorChoice, colorChoice } =
    useContext(SettingsContext);
  const { activeId } = useContext(LibraContext);

  const url = useUrl({ id: activeId, preview: true });

  return (
    <div
      className={css({
        padding: '4',
        mt: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      })}
    >
      <ButtonGroup kind="bare" size="sm" space="tight">
        <Button onClick={toggleSidebar}>{hideSidebar ? 'Show' : 'Hide'} Sidebar</Button>
        <Button
          onClick={() =>
            setColorChoice && setColorChoice(colorChoice === 'light' ? 'dark' : 'light')
          }
        >
          {colorChoice === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Button>

        <Button
          asChild
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Preview Iframe <Open width={14} height={14} />
          </a>
        </Button>
      </ButtonGroup>
    </div>
  );
};
