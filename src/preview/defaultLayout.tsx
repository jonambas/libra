import { FC, PropsWithChildren } from 'react';

const DefaultLayout: FC<
  PropsWithChildren<{
    theme: 'light' | 'dark';
    themePreference: 'light' | 'dark' | 'system';
  }>
> = (props) => {
  // console.log(props);

  const styles = {
    color:
      props.theme === 'light' ? 'black' : props.theme === 'dark' ? 'white' : undefined,
    background:
      props.theme === 'light' ? 'white' : props.theme === 'dark' ? 'black' : undefined
  };

  if (!props.children) {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          padding: '16px',
          fontSize: '14px',
          ...styles
        }}
      >
        <p style={{ margin: '0 0 12px 0' }}>
          <strong>Libra</strong>
        </p>
        <p style={{ margin: '0' }}>
          See <a href="https://github.com/jonambas">Github</a> for more information.
        </p>
      </div>
    );
  }

  return (
    <div style={styles}>
      {props.children}
      <div>theme: {props.theme}</div>
    </div>
  );
};

export default DefaultLayout;
