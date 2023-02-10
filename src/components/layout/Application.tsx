import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import {ApplicationLayout} from './Layout';
import Nav from './Nav/Nav';
import {withRouter, RouterProps} from 'hoc';
import {useState} from 'react';
import {City} from 'types/city';

interface Props extends RouterProps {
  googleMapApiLoaded: boolean;
  switchThema(): void;
}

const Application = ({switchThema, googleMapApiLoaded, location}: Props) => {
  const [city, setCity] = useState<City | undefined>(location.state?.city);

  const selectCity = (value: City) => setCity(value);

  return (
    <>
      <ApplicationLayout>
        <Nav />

        <Layout className="site-layout">
          {googleMapApiLoaded && <Header city={city} selectCity={selectCity} switchThema={switchThema} />}
          <Content>
            <Outlet context={{city, setCity}} />
          </Content>
        </Layout>
      </ApplicationLayout>
    </>
  );
};

export default withRouter(Application);
