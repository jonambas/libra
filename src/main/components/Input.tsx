import { ComponentPropsWithoutRef, FC } from 'react';

import { css } from '../stiches';

export const Input: FC<ComponentPropsWithoutRef<'input'> & { label: string }> = (
  props
) => {
  return (
    <>
      <label
        htmlFor={props.id}
        style={{
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: '1px',
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px'
        }}
      >
        {props.label}
      </label>
      <input
        id={props.id}
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
    </>
  );
};
