import {useDarkMode} from 'hooks/useDarkMode';
import {AppProvider} from 'providers/AppProvider';
import {RouterProvider} from 'react-router-dom';
import {AppRoutes} from 'routes';
import {ThemeProvider} from 'styled-components';
import {FontsStyle} from 'styles/fonts';
import {GlobalStyle} from 'styles/GlobalStyle';
import {ResetStyles} from 'styles/ResetStyles';

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
        <RouterProvider router={AppRoutes({switchTheme})} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
