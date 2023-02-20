import {HeartOutlined, HomeOutlined} from '@ant-design/icons';
import {MenuProps} from 'antd';
import {Link} from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem(
    'Dashboard',
    '/app/dashboard',
    <div>
      <Link to="/app/dashboard">
        <HomeOutlined style={{fontSize: '24px'}} />
      </Link>
    </div>
  ),
  getItem(
    'Saved',
    '/app/favorites',
    <div>
      <Link to="/app/favorites">
        <HeartOutlined style={{fontSize: '24px'}} />
      </Link>
    </div>
  ),
  // getItem(
  //   'Settings',
  //   '3',
  //   <div>
  //     <SettingOutlined style={{fontSize: '24px'}} />
  //   </div>
  // ),
];
