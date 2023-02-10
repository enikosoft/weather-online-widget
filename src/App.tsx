import React from 'react';
import {ResetStyles} from 'styles/ResetStyles';
import {ThemeProvider} from 'styled-components';
import {useDarkMode} from 'hooks/useDarkMode';
import {GlobalStyle} from 'styles/GlobalStyle';
import {AppProvider} from 'providers/AppProvider';
import {AppRoutes} from 'routes';
import {FontsStyle} from 'styles/fonts';
import {useJsApiLoader} from '@react-google-maps/api';
import {GOOGLE_API_KEY} from 'config/api';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const switchTheme = () => {
    toggleTheme();
  };

  const {isLoaded: googleMapApiLoaded, loadError} = useJsApiLoader({
    libraries: ['places'],
    language: 'en',
    preventGoogleFontsLoading: true,
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  if (loadError) {
    console.log('Google map Api error:', loadError);
  }

  return (
    <ThemeProvider theme={{mode: theme}}>
      <ResetStyles />
      <FontsStyle />
      <GlobalStyle />
      <AppProvider>
        <AppRoutes switchTheme={switchTheme} googleMapApiLoaded={googleMapApiLoaded} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
