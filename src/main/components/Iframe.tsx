import { FC, useContext } from 'react';

import { LibraContext } from '../context/libra';

export const Iframe: FC = () => {
  const { iframeRef } = useContext(LibraContext);

  return (
    <div
      style={{
        flex: '1',
        padding: '0 var(--space8) var(--space8)'
      }}
    >
      <iframe
        title="Libra Preview"
        id="libra-preview-iframe"
        width="100%"
        height="100%"
        src="/preview.html"
        ref={iframeRef}
      />
    </div>
  );
};
