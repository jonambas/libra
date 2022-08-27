import { FC, PropsWithChildren } from 'react';

const defaultStyles = (theme: 'dark' | 'light') => `
  #root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 16px;
    font-size: 14px;
    background: ${
      theme === 'light' ? 'white' : theme === 'dark' ? '#1a1a1c' : 'inherit'
    }; 
  }

  * {
    color: ${theme === 'light' ? 'black' : theme === 'dark' ? 'white' : 'inherit'};
  }

  h1 {
    font-size: 20px;
  }
`;

const DefaultLayout: FC<
  PropsWithChildren<{
    theme: 'light' | 'dark';
    themePreference: 'light' | 'dark' | 'system';
  }>
> = (props) => {
  const { theme, children } = props;

  if (!children) {
    return (
      <>
        <style>{defaultStyles(theme)}</style>
        <div>
          <h1>Welcome to Libra!</h1>
          <p>You can customize this default view by creating a custom layout.</p>
          <p>
            See <a href="https://github.com/jonambas/libra">github.com/jonambas/libra</a>{' '}
            for more information.
          </p>
        </div>
      </>
    );
  }

  return <>{props.children}</>;
};

export default DefaultLayout;
