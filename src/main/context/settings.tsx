import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react';

type Context = {
  theme?: 'dark' | 'light' | 'system';
  setTheme?: (theme: Context['theme']) => void;
  hideSidebar?: boolean;
  toggleSidebar?: () => void;
};

export const SettingsContext = createContext<Context>({});

export const SettingsProvider: FC<PropsWithChildren> = (props) => {
  const [themePreference, setThemePreference] = useState<Context['theme']>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [hideSidebar, toggleSidebar] = useState<boolean>(false);

  const handleSetTheme = (v: Context['theme']) => {
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
        setTheme: handleSetTheme,
        hideSidebar,
        toggleSidebar: () => toggleSidebar(!hideSidebar)
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
