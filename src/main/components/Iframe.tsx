import { FC, useContext } from 'react';

import { LibraContext } from '../context/libra';
import { css } from '../stiches';

export const Iframe: FC = () => {
  const { iframeRef } = useContext(LibraContext);

  return (
    <div
      className={css({
        flex: '1',
        padding: '0 $8 $8 $8'
      })()}
    >
      <iframe
        id="libra-preview-iframe"
        className={css({
          border: 'none'
        })()}
        width="100%"
        height="100%"
        src="/preview.html"
        ref={iframeRef}
      />
    </div>
  );
};
