import './App.css';
import { FC, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Text } from '@sweatpants/react';
import { css, cva } from '../lb-system/css';
import { Navigation } from './components/Navigation';
import { Iframe } from './components/Iframe';
import { LibraContext, LibraProvider } from './context/libra';
import { SettingsProvider, SettingsContext } from './context/settings';
import { Toolbar } from './components/Toolbar';

const { title } = __LIBRA__;

const Index: FC = () => {
  const { hideSidebar } = useContext(SettingsContext);
  const { ready } = useContext(LibraContext);

  return (
    <div
      aria-hidden={ready ? 'false' : 'true'}
      className={css({
        display: 'flex'
      })}
    >
      <div
        aria-hidden={hideSidebar ? 'true' : undefined}
        tabIndex={hideSidebar ? -1 : undefined}
        className={cva({
          base: {
            display: 'flex',
            flexDir: 'column',
            width: '200px',
            height: '100vh'
          },
          variants: {
            hideSidebar: {
              true: {
                width: '0',
                overflow: 'hidden',
                visibility: 'hidden',
                transform: 'translateX(-100%)'
              },
              false: {}
            }
          }
        })({ hideSidebar })}
      >
        <Text
          looksLike="h5"
          element="h1"
          className={css({ paddingTop: '4', paddingLeft: '5' })}
        >
          {title}
        </Text>

        <Navigation />
      </div>
      <main className={css({ display: 'flex', flexDir: 'column', flex: '1' })}>
        <Toolbar />
        <Iframe />
      </main>
      {!ready ? (
        <div
          className={css({
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            bg: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'gray14',
            fontSize: '4'
          })}
        >
          Loading Libra...
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
