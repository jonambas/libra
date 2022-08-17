declare const __LIBRA__: {
  backgrounds: string[];
  title: string;
  debug: boolean;
};

declare module '__LIBRA_LAYOUT__' {
  declare const Layout: import('react').FC<import('react').PropsWithChildren>;
  export default Layout;
}
