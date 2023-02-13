import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {StyledNav, StyledSider} from './style';
import {items} from './utils';

const Nav = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleCollapse = (value) => setCollapsed(value);

  return (
    <ThemeProvider theme={{collapsed}}>
      <StyledSider width={200} collapsedWidth={80} collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" style={{height: 32, margin: 16}}>
          W.
        </div>

        <StyledNav defaultSelectedKeys={['1']} mode="inline" items={items} />
      </StyledSider>
    </ThemeProvider>
  );
};

export default Nav;
