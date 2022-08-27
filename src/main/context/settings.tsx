import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { LibraContext } from './libra';

type SettingsContext = {
  themePreference: 'dark' | 'light' | 'system';
  theme: 'dark' | 'light';
  setTheme: (theme: SettingsContext['themePreference']) => void;
  hideSidebar: boolean;
  toggleSidebar: () => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const { activeId, reloadEntry } = useContext(LibraContext);
  const [themePreference, setThemePreference] =
    useState<SettingsContext['themePreference']>('system');
  const [theme, setTheme] = useState<SettingsContext['theme']>('light');
  const [hideSidebar, toggleSidebar] = useState<boolean>(false);
  const [, setSearchParams] = useSearchParams();

  // Initial Load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramTheme = params.get('theme') ?? 'light';
    const paramThemePreference = params.get('themePreference') ?? 'system';

    if (paramTheme) {
      setTheme(paramTheme as 'light' | 'dark');
    }
    if (paramThemePreference) {
      setThemePreference(paramThemePreference as 'light' | 'dark' | 'system');
    }
    setSearchParams(
      {
        themePreference: paramThemePreference,
        theme: paramTheme
      },
      { replace: true }
    );
  }, []);

  // Updates query params when theme changes
  useEffect(() => {
    setSearchParams(
      {
        entry: activeId ?? '',
        themePreference: themePreference,
        theme: theme
      },
      { replace: true }
    );
    reloadEntry && reloadEntry();
  }, [theme, themePreference, activeId]);

  const handleSetTheme = (v: SettingsContext['themePreference']) => {
    setThemePreference(v);
  };

  const handleMatch = useCallback(
    (e: MediaQueryListEvent) => {
      if (themePreference === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    },
    [themePreference]
  );

  useEffect(() => {
    if (themePreference === 'system') {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(dark ? 'dark' : 'light');
    } else if (themePreference) {
      setTheme(themePreference);
    }
  }, [themePreference]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleMatch);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleMatch);
    };
  }, [handleMatch]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themePreference,
        setTheme: handleSetTheme,
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar)
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
