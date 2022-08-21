import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react';

type SettingsContext = {
  themePreference: 'dark' | 'light' | 'system';
  theme: 'dark' | 'light';
  setTheme: (theme: SettingsContext['themePreference']) => void;
  hideSidebar: boolean;
  toggleSidebar: () => void;
};

export const SettingsContext = createContext<Partial<SettingsContext>>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const [themePreference, setThemePreference] =
    useState<SettingsContext['themePreference']>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [hideSidebar, toggleSidebar] = useState<boolean>(false);

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
