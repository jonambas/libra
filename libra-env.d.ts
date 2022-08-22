declare const __LIBRA__: {
  backgrounds: string[];
  title: string;
  debug: boolean;
};

declare module '__LIBRA_LAYOUT__' {
  declare const Layout: import('react').FC<
    import('react').PropsWithChildren<{
      theme?: 'light' | 'dark';
      themePreference?: 'light' | 'dark' | 'system';
    }>
  >;
  export default Layout;
}
