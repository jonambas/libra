import { ComponentPropsWithoutRef, forwardRef } from 'react';
import cx from 'classnames';
import './Button.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={cx('button', className)} ref={ref}>
      {children}
    </button>
  );
});

type ButtonLinkProps = ComponentPropsWithoutRef<'a'>;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(props, ref) {
    const { children, className, ...rest } = props;
    return (
      <a {...rest} className={cx('button', className)} ref={ref}>
        {children}
      </a>
    );
  }
);
