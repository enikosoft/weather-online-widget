import styled from 'styled-components';
import {Menu} from 'antd';
import Sider from 'antd/es/layout/Sider';
import {themeStyles} from 'styles';

interface BurgerNav {
  $open?: boolean
  $isBurger?: boolean
}

export const StyledBurgerButton = styled.button<BurgerNav>`
  position: absolute;
  top: 55px;
  left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({theme, $open}) => $open ? themeStyles[theme.mode].color : themeStyles[theme.mode].color};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({$open}) => $open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({$open}) => $open ? '0' : '1'};
      transform: ${({$open}) => $open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({$open}) => $open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const StyledBurgerNavMenu = styled.nav<BurgerNav>`
  display: flex;
  flex-direction: column;
  transform: ${({$open}) => $open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  .nav-toggle-theme {
    position: absolute;
    z-index: 10;
    position: absolute;
    top: 45px;
    left: 160px;
  }
`;

export const StyledNavSider = styled(Sider)<BurgerNav>`
  &&& {
    min-height:  ${({$isBurger}) => $isBurger ? '100vh' : 'auto'};

    background: ${(props) => themeStyles[props.theme.mode].navBg};
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};

    border-radius: 16px;
    border-bottom-left-radius:  ${({$isBurger}) => $isBurger && 'unset'};
    border-top-left-radius:  ${({$isBurger}) => $isBurger && 'unset'};

    .ant-layout-sider-trigger {
      border-radius: 16px;
      bottom: 40px;
    }

    .logo {
      font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
      color: ${(props) => themeStyles[props.theme.mode].color};
      height: 32px;
      margin: 16px;
      text-align: center;
      font-size: 30px;
    }

    > .ant-layout-sider-trigger{
      background: transparent;
      color: ${(props) => themeStyles[props.theme.mode].color};
    }
  }
`;

export const StyledNav = styled(Menu)<BurgerNav>`
  &&& {
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    border: none;
    background: inherit;

    margin: auto;
    padding: ${({$isBurger}) => $isBurger ? '132px 0 0 18px;' : '50px 0 0 0;'}; */

    width: 100%;
    height:  ${({$isBurger}) => $isBurger ? '100vh' : 'auto'};

    &.ant-menu.ant-menu-inline-collapsed {
      width: ${(props) => {
        if (props.theme.collapsed) return '48px';
        return 'auto';
      }};
    }

    > li {
      display: flex;

      width: ${(props) => {
        if (props.$isBurger) return '90%'
        if (props.theme.collapsed) return '40px';
        return '90%';
      }};
      height: ${({$isBurger}) => $isBurger ? '48px' : '40px'};

      margin: 5px;
      padding: 0 0 0 10px;

      font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
      color: ${(props) => themeStyles[props.theme.mode].color};
      font-size:  ${({$isBurger, theme}) => $isBurger ? '24px' : themeStyles[theme.mode].fontSize};
    }

    > li.ant-menu-item-selected {
      background: ${(props) => themeStyles[props.theme.mode].hoverNav};
      color: var(--white);
    }

    > li.ant-menu-item.ant-menu-item-active {
      background-color: ${(props) => themeStyles[props.theme.mode].hoverNav};
      color: var(--white);
    }

    > li.ant-menu-item-icon {
      transition: none;
      font-size:  ${({$isBurger, theme}) => $isBurger ? '32px' : themeStyles[theme.mode].fontSize};
    }
  }
`;
