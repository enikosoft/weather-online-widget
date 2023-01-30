import React from 'react';
import {ResetStyles} from 'styles/ResetStyles';
import {ThemeProvider} from 'styled-components';
import {useDarkMode} from 'hooks/useDarkMode';
import {GlobalStyle} from 'styles/GlobalStyle';
import {AppProvider} from 'providers/AppProvider';
import {AppRoutes} from 'routes';
import {FontsStyle} from 'styles/fonts';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const switchTheme = () => {
    toggleTheme();
  };

  return (
    <ThemeProvider theme={{mode: theme}}>
      <ResetStyles />
      <FontsStyle />
      <GlobalStyle />
      <AppProvider>
        <AppRoutes switchTheme={switchTheme} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
