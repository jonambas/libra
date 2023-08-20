import { FC, useContext } from 'react';

import { Open } from '../icons';
import { SettingsContext } from '../context/settings';
import { useUrl } from '../hooks/useUrl';

import { Button, ButtonLink } from './Button';

export const Toolbar: FC = () => {
  const { hideSidebar, toggleSidebar } = useContext(SettingsContext);
  const url = useUrl({ preview: true });

  return (
    <div style={{ padding: 'var(--space3)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <div>
          <Button onClick={toggleSidebar}>{hideSidebar ? 'Show' : 'Hide'} Sidebar</Button>
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
