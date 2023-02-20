import {useLayoutEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {StyledNav, StyledSider} from './style';
import {items} from './utils';

const Nav = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  useLayoutEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleCollapse = (value) => setCollapsed(value);

  return (
    <ThemeProvider theme={{collapsed}}>
      <StyledSider width={200} collapsedWidth={80} collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" style={{height: 32, margin: 16}}>
          W.
        </div>

        <StyledNav selectedKeys={[selectedMenu]} mode="inline" items={items} />
      </StyledSider>
    </ThemeProvider>
  );
};

export default Nav;
