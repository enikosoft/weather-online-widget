import Application from 'components/layout/Application';
import {Dashboard} from 'pages';

export const getRoutes = (switchThema, googleMapApiLoaded) => {
  return [
    {
      path: '/app',
      element: <Application switchThema={switchThema} googleMapApiLoaded={googleMapApiLoaded} />,
      children: [
        {path: '', element: <Dashboard />},
        {path: 'favorite', element: <div>favorite</div>},
        {path: 'dashboard', element: <Dashboard />},
      ],
    },
  ];
};
