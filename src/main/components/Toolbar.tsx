import { FC, useContext } from 'react';
import { Button, ButtonGroup, ColorSchemeContextValue, Select } from '@sweatpants/react';
import { Open } from '../icons';
import { css } from '../../lb-system/css';
import { SettingsContext } from '../context/settings';
import { useUrl } from '../hooks/useUrl';

export const Toolbar: FC = () => {
  const { hideSidebar, toggleSidebar, setColorChoice, colorChoice } =
    useContext(SettingsContext);

  const url = useUrl({ preview: true });

  return (
    <div
      className={css({
        padding: '4',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      })}
    >
      <ButtonGroup kind="bare" size="sm" space="tight">
        <Button onClick={toggleSidebar}>{hideSidebar ? 'Show' : 'Hide'} Sidebar</Button>
        <Select
          id="color-scheme"
          size="sm"
          kind="bare"
          hideChevron
          hideLabel
          label="Select color scheme"
          value={colorChoice}
          onValueChange={(v) =>
            setColorChoice && setColorChoice(v as ColorSchemeContextValue[0])
          }
        >
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
        </Select>
        <Button
          asChild
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Preview iFrame <Open width={14} height={14} />
          </a>
        </Button>
      </ButtonGroup>
    </div>
  );
};
