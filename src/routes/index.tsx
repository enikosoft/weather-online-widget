import {SearchPage} from 'pages';
import {useRoutes} from 'react-router-dom';
import {getRoutes} from './routes';

export const AppRoutes = ({switchTheme}) => {
  const commonRoutes = [{path: '/', element: <SearchPage />}];

  const element = useRoutes([...getRoutes(switchTheme), ...commonRoutes]);

  return <>{element}</>;
};
