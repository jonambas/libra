import { FC, useContext } from 'react';
import cx from 'classnames';

import { globalCss, css, dark } from './stiches';
import { Navigation } from './components/Navigation';
import { Iframe } from './components/Iframe';
import { LibraProvider } from './context/libra';
import { SettingsProvider, SettingsContext } from './context/settings';
import { Toolbar } from './components/Toolbar';
import { Text } from './components/Text';

const { title } = __LIBRA__;

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  html: {
    fontFamily: '$sans',
    background: '$background'
  },
  'html, body, #root': {
    height: '100%'
  }
});

const Index: FC = () => {
  const { theme } = useContext(SettingsContext);

  const wrapperClassNames = css({
    display: 'flex',
    minHeight: '100%'
  });

  return (
    <div className={cx(wrapperClassNames(), theme === 'dark' && dark)}>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          background: '$background'
        })()}
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
          flexDirection: 'column',
          background: '$background'
        })()}
      >
        <Toolbar />
        <Iframe />
      </main>
    </div>
  );
};

export const App: FC = () => {
  globalStyles();
  return (
    <LibraProvider>
      <SettingsProvider>
        <Index />
      </SettingsProvider>
    </LibraProvider>
  );
};
