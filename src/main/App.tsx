import { FC, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useSearchParams
} from 'react-router-dom';
import { ColorSchemeProvider, Text } from '@sweatpants/react';
import { css, cva } from '../../styled-system/css';
import { Navigation } from './components/Navigation';
import { Iframe } from './components/Iframe';
import { LibraContext, LibraProvider } from './context/libra';
import { SettingsProvider, SettingsContext } from './context/settings';
import { Toolbar } from './components/Toolbar';

import './App.css';

const { title } = __LIBRA__;

const Index: FC = () => {
  const { hideSidebar } = useContext(SettingsContext);
  const { ready } = useContext(LibraContext);

  return (
    <div
      aria-hidden={ready ? 'false' : 'true'}
      className={css({
        display: 'flex',
        bg: { base: '#fff', _dark: 'baseBg' }
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

        {ready ? <Navigation /> : null}
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

export const Providers: FC = () => {
  const [params] = useSearchParams();
  const defaultScheme = (params.get('scheme') as 'light' | 'dark') ?? undefined;

  return (
    <ColorSchemeProvider setHtmlAttribute defaultScheme={defaultScheme}>
      <LibraProvider>
        <SettingsProvider>
          <Index />
        </SettingsProvider>
      </LibraProvider>
    </ColorSchemeProvider>
  );
};

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Providers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
