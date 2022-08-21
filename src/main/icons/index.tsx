import { ComponentPropsWithoutRef, FC } from 'react';

export const Folder: FC<ComponentPropsWithoutRef<'svg'>> = (props) => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      {...props}
    >
      <path d="M6.5 10.5l3-3-3-3" stroke="currentColor" strokeLinecap="square"></path>
    </svg>
  );
};

export const Open: FC<ComponentPropsWithoutRef<'svg'>> = (props) => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      {...props}
    >
      <path
        d="M8.146 9.146l-.353.354.707.707.354-.353-.708-.708zM10.5 7.5l.354.354.353-.354-.353-.354-.354.354zM8.854 5.146L8.5 4.793l-.707.707.353.354.708-.708zm0 4.708l2-2-.708-.708-2 2 .708.708zm2-2.708l-2-2-.708.708 2 2 .708-.708zM10.5 7H4v1h6.5V7z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
