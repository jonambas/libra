import { ComponentPropsWithoutRef, FC } from 'react';
import './Input.css';

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
      <input id={props.id} className="input" type="text" {...props} />
    </>
  );
};
