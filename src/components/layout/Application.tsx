import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet, useNavigate} from 'react-router-dom';
import Header from './Header/Header';
import {ApplicationLayout} from './Layout';
import Nav from './Nav/Nav';
import {withRouter, RouterProps} from 'hoc';
import {City} from 'types/city';
import {useCityStore} from 'state/city';

interface Props extends RouterProps {
  switchThema(): void;
}

const Application = ({switchThema}: Props) => {
  const [city, setCity] = useCityStore((state) => [state.cityInContext, state.add]);

  const navigate = useNavigate()

  const selectCity = (value: City) => {
    setCity(value);
    navigate('/app/dashboard');
  }

  return (
    <>
      <ApplicationLayout>
        <Nav />
        <Layout className="site-layout">
          <Header city={city} selectCity={selectCity} switchThema={switchThema} />
          <Content>
            <Outlet context={{city, setCity}} />
          </Content>
        </Layout>
      </ApplicationLayout>
    </>
  );
};

export default withRouter(Application);
