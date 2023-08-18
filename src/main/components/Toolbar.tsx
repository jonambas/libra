import { FC, useContext } from 'react';
import * as Select from '@radix-ui/react-select';
import './Select.css';

import { Open } from '../icons';
import { SettingsContext } from '../context/settings';
import { useUrl } from '../hooks/useUrl';

import { Button, ButtonLink } from './Button';

const Listbox: FC = () => {
  const { setTheme } = useContext(SettingsContext);

  const handleChange = (v: 'light' | 'dark' | 'system') => {
    setTheme && setTheme(v);
  };

  return (
    <Select.Root defaultValue="system" onValueChange={handleChange}>
      <Select.Trigger aria-label="Theme" asChild>
        <Button>
          Theme: <Select.Value />
        </Button>
      </Select.Trigger>
      <Select.Content className="select-content">
        <Select.Viewport>
          <Select.Item value="system" className="select-item">
            <Select.ItemText>System</Select.ItemText>
          </Select.Item>
          <Select.Item value="light" className="select-item">
            <Select.ItemText>Light</Select.ItemText>
          </Select.Item>
          <Select.Item value="dark" className="select-item">
            <Select.ItemText>Dark</Select.ItemText>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export const Toolbar: FC = () => {
  const { hideSidebar, toggleSidebar } = useContext(SettingsContext);
  const url = useUrl({ preview: true });

  return (
    <div style={{ padding: 'var(--space3)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '$0p5'
        }}
      >
        <div>
          <Button onClick={toggleSidebar}>{hideSidebar ? 'Show' : 'Hide'} Sidebar</Button>
        </div>
        <div>
          <Listbox />
        </div>

        <div>
          <ButtonLink
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}
          >
            Preview iFrame <Open width={14} height={14} />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
