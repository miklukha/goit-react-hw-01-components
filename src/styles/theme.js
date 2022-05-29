import { getQueriesForElement } from '@testing-library/react';

export const theme = Object.freeze({
  colors: {
    isOnline: 'rgb(76, 197, 76)',
    isOffline: 'rgb(238, 30, 30)',
    accent: '#2196F3',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },
  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },
});
