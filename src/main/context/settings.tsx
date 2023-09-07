import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { UseColorScheme, useColorScheme } from '@sweatpants/react';
import { LibraContext } from './libra';

type SettingsContext = {
  hideSidebar: boolean;
  toggleSidebar: () => void;
  colorChoice: UseColorScheme['scheme'] | 'system';
  setColorChoice: (choide: UseColorScheme['scheme']) => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { activeId } = useContext(LibraContext);
  const [hideSidebar, toggleSidebar] = useState<boolean>(false);

  const [prefers, setPrefers] = useColorScheme({ setHtmlAttribute: true });

  const [, setSearchParams] = useSearchParams();

  // Updates query params when entry changes
  useEffect(() => {
    setSearchParams(
      {
        entry: activeId ?? '',
        scheme: prefers ?? ''
      },
      { replace: true }
    );
  }, [activeId, prefers]);

  return (
    <SettingsContext.Provider
      value={{
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar),
        colorChoice: prefers,
        setColorChoice: setPrefers
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
