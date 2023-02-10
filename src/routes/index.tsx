import {SearchPage} from 'pages';
import {useRoutes} from 'react-router-dom';
import {getRoutes} from './routes';

export const AppRoutes = ({switchTheme, googleMapApiLoaded = false}) => {
  const commonRoutes = [{path: '/', element: <SearchPage googleMapApiLoaded={googleMapApiLoaded} />}];

  const element = useRoutes([...getRoutes(switchTheme, googleMapApiLoaded), ...commonRoutes]);

  return <>{element}</>;
};
