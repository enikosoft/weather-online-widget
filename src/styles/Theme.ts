export enum ThemeContext {
  dark = 'dark',
  light = 'light',
}

export interface GlobalTheme {
  mode: ThemeContext;
}

export interface ThemeProps {
  theme: ThemeContext;
  toggleTheme: () => void;
}

export const themeStyles = {
  dark: {
    fontSize: '16px',
    fontFamily: 'var(--primaryFontFamily)',
    fontBoldFamily: 'var(--primaryBoldFamily)',
    background: 'var(--black)',
    color: 'var(--white)',

    navBg: '#202020',
    hoverNav: 'var(--primary-blue)',

    themeBtnBg: '#151515',

    contentBlockBackground: 'var(--primary-grey)',
    scrollColor: 'var(--light-grey)',
    backgroundInput: '#1B1B1B',

    cardBg: '#26262A',

    infoText: 'var(--darked-white)',
  },
  light: {
    fontSize: '18px',
    fontFamily: 'var(--primaryFontFamily)',
    fontBoldFamily: 'var(--primaryBoldFamily)',
    background: 'var(--white)',
    color: 'var(--black)',

    navBg: '#F0F0F0',
    hoverNav: 'var(--primary-blue)',

    themeBtnBg: '#F7F8FA',

    contentBlockBackground: 'var(--primary-grey)',
    scrollColor: 'var(--black)',
    backgroundInput: '#F5F5F5',

    cardBg: 'var(--white)',

    infoText: 'var(--primary-grey)',
  },
};
