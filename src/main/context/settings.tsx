import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { ColorSchemeContextValue, useColorScheme } from '@sweatpants/react';
import { LibraContext } from './libra';

type SettingsContext = {
  hideSidebar: boolean;
  toggleSidebar: () => void;
  colorChoice: ColorSchemeContextValue[0] | 'system';
  setColorChoice: (choide: ColorSchemeContextValue[0]) => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { activeId } = useContext(LibraContext);
  const [hideSidebar, toggleSidebar] = useState<boolean>(false);

  const [scheme, setScheme] = useColorScheme();
  const [, setSearchParams] = useSearchParams();

  // Updates query params when entry changes
  useEffect(() => {
    setSearchParams(
      {
        entry: activeId ?? '',
        scheme: scheme ?? ''
      },
      { replace: true }
    );
  }, [activeId, scheme]);

  return (
    <SettingsContext.Provider
      value={{
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar),
        colorChoice: scheme,
        setColorChoice: setScheme
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
