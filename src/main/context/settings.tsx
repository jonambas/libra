import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { UseColorScheme, useColorScheme } from '@sweatpants/react';

import { LibraContext } from './libra';

type SettingsContext = {
  hideSidebar: boolean;
  toggleSidebar: () => void;
  colorChoice: UseColorScheme['prefers'] | 'system';
  setColorChoice: (choide: UseColorScheme['prefers'] | 'system') => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { activeId } = useContext(LibraContext);
  const [hideSidebar, toggleSidebar] = useState<boolean>(false);

  const initialPrefers = useRef<'light' | 'dark'>('light');
  const [prefers, setPrefers] = useColorScheme({ setHtmlAttribute: true });
  const [choice, setChoice] = useState<UseColorScheme['prefers'] | 'system'>('system');

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    initialPrefers.current = prefers;
  }, []);

  useEffect(() => {
    setPrefers(choice !== 'system' ? choice : initialPrefers.current);
  }, [choice]);

  // Updates query params when entry changes
  useEffect(() => {
    setSearchParams(
      {
        entry: activeId ?? '',
        scheme: prefers ?? ''
      },
      { replace: true }
    );
  }, [activeId, choice, prefers]);

  return (
    <SettingsContext.Provider
      value={{
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar),
        colorChoice: choice,
        setColorChoice: setChoice
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
