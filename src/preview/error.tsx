import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const Fallback: FC<FallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div role="alert">
      <button onClick={resetErrorBoundary}>Reset Error Boundary</button>
      <p className="title">
        {error.name}: {error.message}
      </p>
      <pre className="stack">{error.stack}</pre>
    </div>
  );
};

const style = `
  [role="alert"] {
    font-family: sans-serif;
    padding: 16px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    
    margin: 0;
    padding: 0;
    text-decoration: underline;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .stack {
    font-size: 11px;
    line-height: 1.8em;
  }
`;

const light = `[role="alert"] * { color: black; }`;
const dark = `pre { color: #9ca3af; } .title,button { color: white; }`;

export const Boundary: FC<PropsWithChildren<{ theme?: 'light' | 'dark' }>> = (props) => {
  return (
    <>
      <style>{style}</style>
      <style>{props.theme === 'dark' ? dark : light}</style>
      <ErrorBoundary FallbackComponent={Fallback}>{props.children}</ErrorBoundary>
    </>
  );
};
