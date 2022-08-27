import { FC, useContext, useEffect } from 'react';
import cx from 'classnames';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { globalCss, css, dark } from './stiches';
import { Navigation } from './components/Navigation';
import { Iframe } from './components/Iframe';
import { LibraContext, LibraProvider } from './context/libra';
import { SettingsProvider, SettingsContext } from './context/settings';
import { Toolbar } from './components/Toolbar';
import { Text } from './components/Text';

const { title } = __LIBRA__;

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  html: {
    fontFamily: '$sans'
  },
  'html, body, #root': {
    height: '100%',
    background: '$background',
    transition: 'background 0.08s'
  }
});

const Index: FC = () => {
  const { theme, themePreference, hideSidebar } = useContext(SettingsContext);
  const { ready } = useContext(LibraContext);
  globalStyles();

  const wrapperClassNames = css({
    display: 'flex',
    minHeight: '100%'
  });

  const sidebarHiddenClassNames = css({
    width: '0',
    overflow: 'hidden',
    visibility: 'hidden'
  });

  useEffect(() => {
    // Adds dark mode class name to HTML tag
    if (theme === 'dark') {
      document.documentElement.classList.add(dark);
    } else {
      document.documentElement.classList.remove(dark);
    }
  }, [theme, themePreference]);

  return (
    <div className={cx(wrapperClassNames())} aria-hidden={ready ? 'false' : 'true'}>
      <div
        aria-hidden={hideSidebar ? 'true' : undefined}
        tabIndex={hideSidebar ? -1 : undefined}
        className={cx(
          css({
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            transition: '0.07s'
          })(),
          hideSidebar && sidebarHiddenClassNames()
        )}
      >
        <Text
          as="h1"
          className={css({
            fontSize: '$200',
            padding: '$4 0 0 $3',
            color: '$textHeavy'
          })()}
        >
          {title}
        </Text>
        <Navigation />
      </div>
      <main
        className={css({
          flex: '1',
          display: 'flex',
          flexDirection: 'column'
        })()}
      >
        <Toolbar />
        <Iframe />
      </main>
      {!ready ? (
        <div
          className={css({
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100vh',
            width: '100vw',
            background: '$background',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '$100',
            color: '$text'
          })()}
        >
          Loading
        </div>
      ) : null}
    </div>
  );
};

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LibraProvider>
              <SettingsProvider>
                <Index />
              </SettingsProvider>
            </LibraProvider>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
