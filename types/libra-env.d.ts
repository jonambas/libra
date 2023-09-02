declare const __LIBRA__: {
  title: string;
  debug: boolean;
};

declare module '__LIBRA_LAYOUT__' {
  declare const Layout: import('react').FC<
    import('react').PropsWithChildren<{ scheme?: 'light' | 'dark' }>
  >;
  export default Layout;
}
