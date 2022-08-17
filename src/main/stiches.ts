import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      background: 'white',
      text: 'black',
      textHeavy: 'black',
      //
      interactiveHoverBg: '#ECEFF8',
      interactiveHoverText: '#0E233C',
      interactiveHoverBorder: '#D8DEEB',
      //
      interactiveFocusBg: '#0065EF',
      interactiveFocusText: 'white',
      interactiveFocusBorder: '#0065EF',
      //
      // interactiveActiveBg: '#CEE6FF',
      interactiveActiveBg: '#E2F1FF',
      interactiveActiveText: '001240',
      interactiveBorder: '#D8DEEB'

      // gray50: '#F9F9FC',
      // gray100: '#ECEFF8',
      // gray200: '#D8DEEB',
      // gray300: '#C3CDDD',
      // gray400: '#A1AFC3',
      // gray500: '#8192A8',
      // gray600: '#61738B',
      // gray700: '#43556C',
      // gray800: '#283B52',
      // gray900: '#0E233C',
      // purple50: '#F8F6FF',
      // purple100: '#EAEAFF',
      // purple200: '#DDDDFF',
      // purple300: '#BCBCFF',
      // purple400: '#A2A2FF',
      // purple500: '#8484FF',
      // purple600: '#5D5DFF',
      // purple700: '#4B3CF0',
      // purple800: '#4028C8',
      // purple900: '#30008C',
      // blue50: '#F5FAFF',
      // blue100: '#E2F1FF',
      // blue200: '#CEE6FF',
      // blue300: '#96CFFF',
      // blue400: '#4AACFF',
      // blue500: '#0089FF',
      // blue600: '#0065EF',
      // blue700: '#004ABA',
      // blue800: '#052B73',
      // blue900: '#001240'
    },
    space: {
      0: '0rem',
      '0p5': '0.125rem',
      1: '0.25rem',
      '1p5': '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      '3p5': '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem'
    },
    fontSizes: {
      100: '0.8125rem',
      200: '0.875rem',
      300: '1rem',
      400: '1.125rem',
      500: '1.25rem',
      600: '1.5rem',
      700: '1.875rem',
      800: '2.25rem',
      900: '3rem',
      1000: '4rem'
    },
    fonts: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace'
    },
    radii: {
      none: '0px',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      circle: '50%',
      pill: '9999px'
    },
    shadows: {
      focus: '0 0 0 1px $colors$background, 0 0 0 3px $colors$interactiveFocusBg',
      overlay: '0 1px 8px $colors$gray100'
    }
    // fontWeights: {},
    // lineHeights: {},
    // letterSpacings: {},
    // sizes: {},
    // borderWidths: {},
    // borderStyles: {},
    // zIndices: {},
    // transitions: {},
  },
  media: {
    sm: '(min-width: 448px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 960px)',
    xl: '(min-width: 1200px)'
  }
});

export const dark = createTheme({
  colors: {
    background: '#1a1a1c',
    text: '#9ca3af',
    textHeavy: '#eef',

    interactiveHoverBg: '#2a2a3a',
    interactiveHoverText: 'white',
    interactiveHoverBorder: '#484852',

    interactiveFocusBg: '#5D5DFF',
    interactiveFocusText: 'white',
    interactiveFocusBorder: '#4B3CF0',
    // purple50: '#F8F6FF',
    //   purple100: '#EAEAFF',
    //   purple200: '#DDDDFF',
    //   purple300: '#BCBCFF',
    //   purple400: '#A2A2FF',
    //   purple500: '#8484FF',
    //   purple600: '#5D5DFF',
    //   purple700: '#4B3CF0',
    //   purple800: '#4028C8',
    //   purple900: '#30008C',
    interactiveActiveBg: '#2a2a45',
    interactiveActiveText: 'white',

    interactiveBorder: '#3a3a4a'
  },
  shadows: {
    focus: '0 0 0 1px $colors$background, 0 0 0 3px $colors$interactiveActiveText',
    overlay: 'none'
  }
});
