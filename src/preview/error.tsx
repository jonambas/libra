import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const Fallback: FC<FallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div role="alert" className="libra-error-alert">
      <button className="libra-error-button" onClick={resetErrorBoundary}>
        Reset Error Boundary
      </button>
      <p className="libra-error-title">
        {error.name}: {error.message}
      </p>
      <pre className="libra-error-stack">{error.stack}</pre>
    </div>
  );
};

const style = `
  .libra-error-alert {
    font-family: sans-serif;
    padding: 16px;
  }

  button.libra-error-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    
    margin: 0;
    padding: 0;
    text-decoration: underline;
  }

  .libra-error-title {
    font-size: 20px;
    font-weight: bold;
  }

  .libra-error-stack {
    font-size: 11px;
    line-height: 1.8em;
  }
`;

const light = `.libra-error-alert * { color: black; }`;

export const Boundary: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <style>{style}</style>
      <style>{light}</style>
      <ErrorBoundary FallbackComponent={Fallback}>{props.children}</ErrorBoundary>
    </>
  );
};
