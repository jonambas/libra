import { FC, PropsWithChildren } from 'react';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { as: Element = 'p', className, children } = props;
  return <Element className={className}>{children}</Element>;
};
