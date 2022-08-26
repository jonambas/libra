import { ComponentPropsWithoutRef, FC } from 'react';
import { css } from '../stiches';

export const Input: FC<ComponentPropsWithoutRef<'input'>> = (props) => {
  return (
    <input
      className={css({
        width: '100%',
        padding: '$2',
        background: '$background',
        border: '1px solid $interactiveBorder',
        borderRadius: '$sm',
        transition: '0.08s',
        color: '$text',
        '&:hover': {
          background: '$interactiveBg'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$focus',
          border: '1px solid transparent'
        },
        '&::placeholder': {
          color: '$text'
        }
      })()}
      type="text"
      {...props}
    />
  );
};
