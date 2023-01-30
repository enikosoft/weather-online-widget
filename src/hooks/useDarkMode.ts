import {useEffect, useState} from 'react';
import {ThemeContext} from 'styles/Theme';

export const useDarkMode = (): [ThemeContext, () => void] => {
  const [theme, setTheme] = useState(ThemeContext.dark);

  const toggleTheme = (): void => {
    if (theme === ThemeContext.light) {
      window.localStorage.setItem('theme', ThemeContext.dark);
      setTheme(ThemeContext.dark);
    } else {
      window.localStorage.setItem('theme', ThemeContext.light);
      setTheme(ThemeContext.light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme as ThemeContext);
  }, []);

  return [theme, toggleTheme];
};
