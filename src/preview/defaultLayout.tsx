import { FC, PropsWithChildren } from 'react';

const DefaultLayout: FC<PropsWithChildren> = (props) => {
  if (!props.children) {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          background: 'whitesmoke',
          padding: '16px',
          fontSize: '14px'
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
  return <div>{props.children}</div>;
};

export default DefaultLayout;
