import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {RouterProps, withRouter} from 'hoc';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useCityStore} from 'state/city';
import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';
import {City} from 'types/city';
import Header from './Header/Header';
import {ApplicationLayout} from './Layout';
import Nav from './NavBar/Nav';

interface Props extends RouterProps {
  switchThema(): void;
}

const Application = ({switchThema}: Props) => {
  const [city, setCity] = useCityStore((state) => [state.cityInContext, state.add]);

  const navigate = useNavigate();

  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  const selectCity = (value: City) => {
    setCity(value);
    navigate('/app/dashboard');
  };

  return (
    <>
      <ApplicationLayout className="application-layout">
        <Nav switchThema={switchThema} />

        <Layout className="site-layout">
          <Header isDashboard={isDashboard} city={city} selectCity={selectCity} switchThema={switchThema} />
          <div></div>
          <OutletContent isDashboard={isDashboard} className="app-content">
            <Outlet context={{city, setCity}} />
          </OutletContent>
        </Layout>
      </ApplicationLayout>
    </>
  );
};

const OutletContent = styled(Content)<{isDashboard: boolean}>`
  padding-top: 60px;
  @media screen and (max-width: ${mediaBreakpoints.lg}px) {
    ${({isDashboard}) => (isDashboard ? 'padding-top: 115px;' : 'padding-top: 24px;')}
  }
`;

export default withRouter(Application);
