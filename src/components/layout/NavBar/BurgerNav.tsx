
import {items} from './utils';
import {StyledBurgerNavMenu, StyledNavSider, StyledNav} from './styles';

const BurgerNav = ({open, selectedMenu, ...props}) => {
  return (
    <StyledBurgerNavMenu $open={open} aria-hidden={!open} {...props}>
      <StyledNavSider $isBurger width={300}>
        <StyledNav
          $isBurger
          selectedKeys={[selectedMenu]}
          items={items} />
        </StyledNavSider>     
    </StyledBurgerNavMenu>
  )
}

export default BurgerNav;
