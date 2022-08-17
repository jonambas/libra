import { ComponentPropsWithoutRef, FC, forwardRef, PropsWithChildren } from 'react';
import { css } from '../stiches';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className={css({
        borderRadius: '$sm',
        background: '$background',
        color: '$text',
        border: '1px solid $interactiveBorder',
        padding: '$1p5 $2',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '$100',
        transition: '0.1s',
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
      })()}
      ref={ref}
    >
      {children}
    </button>
  );
});
