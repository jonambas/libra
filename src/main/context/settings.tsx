import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { LibraContext } from './libra';

type SettingsContext = {
  hideSidebar: boolean;
  toggleSidebar: () => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { activeId } = useContext(LibraContext);
  const [hideSidebar, toggleSidebar] = useState<boolean>(false);
  const [, setSearchParams] = useSearchParams();

  // Updates query params when entry changes
  useEffect(() => {
    setSearchParams(
      {
        entry: activeId ?? ''
      },
      { replace: true }
    );
  }, [activeId]);

  return (
    <SettingsContext.Provider
      value={{
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar)
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
