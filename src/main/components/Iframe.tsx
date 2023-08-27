import { FC, useContext } from 'react';

import { LibraContext } from '../context/libra';
import { css } from '../../styled-system/css';

export const Iframe: FC = () => {
  const { iframeRef } = useContext(LibraContext);

  return (
    <div
      className={css({
        flex: '1',
        paddingX: '8',
        '& iframe': {
          border: 'none'
        }
      })}
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
