import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import Header from './Header/Header';
import {ApplicationLayout} from './Layout';
import Nav from './Nav/Nav';

const Application = ({switchThema}) => {
  return (
    <ApplicationLayout>
      <Nav />

      <Layout className="site-layout">
        <Header switchThema={switchThema} />
        <Content style={{margin: '0 16px'}}></Content>
      </Layout>
    </ApplicationLayout>
  );
};

export default Application;
