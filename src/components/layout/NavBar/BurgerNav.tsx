import {ToggleThemeButton} from 'components/lib';
import {StyledBurgerNavMenu, StyledNav, StyledNavSider} from './styles';
import {items} from './utils';

const BurgerNav = ({switchThema, open, selectedMenu, ...props}) => {
  return (
    <StyledBurgerNavMenu $open={open} aria-hidden={!open} {...props}>
      <div className="nav-toggle-theme">
        <ToggleThemeButton switchThema={switchThema} />
      </div>

      <StyledNavSider $isBurger width={300}>
        <StyledNav $isBurger selectedKeys={[selectedMenu]} items={items} />
      </StyledNavSider>
    </StyledBurgerNavMenu>
  );
};

export default BurgerNav;
