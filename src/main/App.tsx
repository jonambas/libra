import './App.css';
import { FC, useContext } from 'react';
import cx from 'classnames';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Iframe } from './components/Iframe';
import { LibraContext, LibraProvider } from './context/libra';
import { SettingsProvider, SettingsContext } from './context/settings';
import { Toolbar } from './components/Toolbar';
import { Text } from './components/Text';

const { title } = __LIBRA__;

const Index: FC = () => {
  const { hideSidebar } = useContext(SettingsContext);
  const { ready } = useContext(LibraContext);

  return (
    <div className="wrapper" aria-hidden={ready ? 'false' : 'true'}>
      <div
        aria-hidden={hideSidebar ? 'true' : undefined}
        tabIndex={hideSidebar ? -1 : undefined}
        className={cx('sidebar', hideSidebar && 'is-hidden')}
      >
        <Text as="h1" className="title">
          {title}
        </Text>
        <Navigation />
      </div>
      <main>
        <Toolbar />
        <Iframe />
      </main>
      {!ready ? <div className="loading">Loading</div> : null}
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
