import {favoritesLoader} from 'api/bulkWeather';
import {cityWeatherLoader} from 'api/weather';
import Application from 'components/layout/Application';
import {Dashboard, Favorite, SearchPage} from 'pages';
import {queryClient} from 'providers';
import {createBrowserRouter} from 'react-router-dom';

export const AppRoutes = (switchTheme) => {
  return createBrowserRouter([
    {
      path: '/',
      element: <SearchPage />,
    },

    {
      path: '/app',
      //errorElement: <div>Error</div>,
      element: <Application switchThema={switchTheme} />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
          loader: cityWeatherLoader(queryClient),
        },
        {
          path: 'favorites',
          element: <Favorite />,
          loader: favoritesLoader(queryClient),
        },
      ],
    },
  ]);
};
