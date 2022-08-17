import { FC, useContext } from 'react';
import { Open } from '../icons';
import { globalCss, css } from '../stiches';
import { SettingsContext } from '../context/settings';
import * as Select from '@radix-ui/react-select';
import { Button } from './Button';

const contentClassName = css({
  background: '$background',
  padding: '$1',
  marginTop: '$1',
  border: '1px solid $interactiveBorder',
  borderRadius: '$sm',
  minWidth: '100px',
  boxShadow: '$overlay'
});

const itemClassName = css({
  background: '$background',
  padding: '$1p5',
  borderRadius: '$xs',
  outline: 'none',
  cursor: 'pointer',
  fontSize: '$100',
  color: '$text',
  '&:hover, &:focus': {
    background: '$interactiveFocusBg',
    color: '$interactiveFocusText'
  }
});

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
      <Select.Content className={contentClassName()}>
        <Select.Viewport>
          <Select.Item value="system" className={itemClassName()}>
            <Select.ItemText>System</Select.ItemText>
          </Select.Item>
          <Select.Item value="light" className={itemClassName()}>
            <Select.ItemText>Light</Select.ItemText>
          </Select.Item>
          <Select.Item value="dark" className={itemClassName()}>
            <Select.ItemText>Dark</Select.ItemText>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export const Toolbar: FC = () => {
  return (
    <div
      className={css({
        padding: '0 $8'
      })()}
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '$3 0',
          gap: '$2'
        })()}
      >
        <div>
          <Listbox />
        </div>
        <div>
          <Button>Preview</Button>
        </div>
        {/* <a
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '$4'
          })()}
        >
          <Open width="20" height="20" />
        </a> */}
      </div>
    </div>
  );
};
