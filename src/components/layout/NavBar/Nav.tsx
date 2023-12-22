import {LegacyRef, memo, useLayoutEffect, useRef, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {useMediaQuery} from 'react-responsive';
import {useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {useOnClickOutside} from 'hooks/useOnClickOutside';

import {mediaBreakpoints} from 'styles';

import BurgerButton from './BurgerButton';
import BurgerNav from './BurgerNav';
import {items} from './utils';

import {StyledNav, StyledNavSider} from './styles';

const Nav = ({switchThema}) => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`,
  });

  const location = useLocation();

  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const handleCollapse = (value) => setCollapsed(value);

  // burger
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef() as LegacyRef<HTMLDivElement>;
  const menuId = 'main-menu';
  useOnClickOutside(ref, () => setOpen(false));

  useLayoutEffect(() => {
    setSelectedMenu(location.pathname);
    setOpen(false);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={{collapsed}}>
      {mobileAndTablet ? (
        <div ref={ref}>
          <FocusLock disabled={!open}>
            <BurgerButton open={open} setOpen={setOpen} aria-controls={menuId} />
            <BurgerNav
              switchThema={switchThema}
              open={open}
              setOpen={setOpen}
              id={menuId}
              selectedMenu={selectedMenu}
            />
          </FocusLock>
        </div>
      ) : (
        <StyledNavSider width={200} collapsedWidth={65} collapsible collapsed={collapsed} onCollapse={handleCollapse}>
          <div className="logo" style={{height: 32, margin: 16}}>
            W.
          </div>

          <StyledNav selectedKeys={[selectedMenu]} mode="inline" items={items} />
        </StyledNavSider>
      )}
    </ThemeProvider>
  );
};

export default memo(Nav);
