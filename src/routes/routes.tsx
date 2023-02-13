import Application from 'components/layout/Application';
import {Dashboard, Favorite} from 'pages';

export const getRoutes = (switchThema, googleMapApiLoaded) => {
  return [
    {
      path: '/app',
      element: <Application switchThema={switchThema} googleMapApiLoaded={googleMapApiLoaded} />,
      children: [
        {path: '', element: <Dashboard />},
        {path: 'favorites', element: <Favorite />},
        {path: 'dashboard', element: <Dashboard />},
      ],
    },
  ];
};
