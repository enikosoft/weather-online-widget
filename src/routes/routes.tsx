import Application from 'components/layout/Application';

export const getRoutes = (switchThema) => {
  return [
    {
      path: '/dashboard',
      element: <Application switchThema={switchThema} />,
      children: [
        // { path: '/profile', element: <Profile /> },
        // { path: '/', element: <Dashboard /> },
        // { path: '*', element: <div to="." /> },
      ],
    },
  ];
};
