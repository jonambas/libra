import type { Layout } from '../../api/types';

const defaultStyles = (scheme?: 'light' | 'dark') => `
  #root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 16px;
    font-size: 14px;
    background: ${scheme === 'light' ? '#fcfcfd' : '#18181a'}; 
  }

  * {
    color: ${scheme === 'light' ? 'black' : 'white'};
  }

  h1 {
    font-size: 20px;
  }
`;

const DefaultLayout: Layout = ({ children, scheme }) => {
  if (!children) {
    return (
      <>
        <style>{defaultStyles(scheme)}</style>
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

  return (
    <>
      <style>{defaultStyles(scheme)}</style>
      {children}
    </>
  );
};

export default DefaultLayout;
