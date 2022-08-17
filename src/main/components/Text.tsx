import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { css } from '../stiches';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { as: Element = 'p', className, children } = props;
  return (
    <Element
      className={cx(
        css({
          // color: 'inherit'
        })(),
        className
      )}
    >
      {children}
    </Element>
  );
};
