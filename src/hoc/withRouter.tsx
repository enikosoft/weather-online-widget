import {Location, NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';

export interface RouterProps {
  location: Location;
  navigate: NavigateFunction;
  params: Params<string>;
}

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate(); // TODO: check useNavigation api
    const params = useParams();
    return <Component {...props} location={location} navigate={navigate} params={params} />;
  }

  return ComponentWithRouterProp;
};
