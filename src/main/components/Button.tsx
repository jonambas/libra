import { ComponentPropsWithoutRef, forwardRef } from 'react';
import cx from 'classnames';
import { css } from '../stiches';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const styles = css({
  borderRadius: '$sm',
  background: '$background',
  color: '$text',
  border: '1px solid $interactiveBorder',
  padding: '$1p5 $2',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '$100',
  transition: '0.1s',
  textDecoration: 'none',
  '&:focus-visible, &:hover': {
    border: '1px solid $interactiveHoverBorder',
    background: '$interactiveHoverBg',
    color: '$interactiveHoverText'
  },
  '&:focus-visible': {
    border: '1px solid $interactiveFocusBorder',
    background: '$interactiveFocusBg',
    color: '$interactiveFocusText'
  }
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={cx(styles(), className)} ref={ref}>
      {children}
    </button>
  );
});

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(props, ref) {
    const { children, className, ...rest } = props;
    return (
      <a {...rest} className={cx(styles(), className)} ref={ref}>
        {children}
      </a>
    );
  }
);
