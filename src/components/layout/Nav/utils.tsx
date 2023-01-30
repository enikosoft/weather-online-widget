import {HeartOutlined, HomeOutlined, SettingOutlined} from '@ant-design/icons';
import {MenuProps} from 'antd';

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
    '1',
    <div>
      <HomeOutlined style={{fontSize: '24px'}} />
    </div>
  ),
  getItem(
    'Saved',
    '2',
    <div>
      <HeartOutlined style={{fontSize: '24px'}} />
    </div>
  ),
  getItem(
    'Settings',
    '3',
    <div>
      <SettingOutlined style={{fontSize: '24px'}} />
    </div>
  ),
];
