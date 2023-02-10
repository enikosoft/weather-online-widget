import {Menu} from 'antd';
import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';
import {themeStyles} from 'styles';

export const StyledSider = styled(Sider)`
  &&& {
    border-radius: 16px;
    background: ${(props) => themeStyles[props.theme.mode].navBg};
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
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

    > .ant-layout-sider-trigger {
      background: transparent;
      color: ${(props) => themeStyles[props.theme.mode].color};
    }
  }
`;

export const StyledNav = styled(Menu)`
  &&& {
    border-radius: 16px;
    border: none;
    background: inherit;
    &.ant-menu.ant-menu-inline-collapsed {
      width: ${(props) => {
        if (props.theme.collapsed) return '48px';
        return 'auto';
      }};
    }
    padding: 50px 0 0 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > li {
      margin: 5px;
      font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
      font-size: ${(props) => themeStyles[props.theme.mode].fontSize};
      color: ${(props) => themeStyles[props.theme.mode].color};
      width: ${(props) => {
        if (props.theme.collapsed) return '48px';
        return '85%';
      }};
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0;
      padding-left: 12px;
      padding-top: 5px;
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
    }
  }
`;
