import styled from 'styled-components';
import {Button} from 'antd';

export interface DefaultButtonTheme {
  large?: boolean;
  small?: boolean;
  medium?: boolean;
  disabled?: boolean;
  widthContent?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const defaultButtonTheme: DefaultButtonTheme = {
  medium: true,
  widthContent: true,
};

export const Btn = styled(Button)`
  &&& {
    height: ${({theme}: {theme: DefaultButtonTheme}) => {
      if (theme.small) {
        return '36px';
      }
      if (theme.medium) {
        return '48px';
      }
      if (theme.large) {
        return '60px';
      }
      return '48px';
    }};
    width: ${({theme}) => {
      if (theme.widthContent) {
        return 'min-content';
      }
      if (theme.small) {
        return '76px';
      }
      if (theme.medium) {
        return '276px';
      }
      if (theme.large) {
        return '390px';
      }
      return '390px';
    }};
    border-radius: 30px;
    background: ${({theme}) => {
      if (theme.primary && theme.disabled) {
        return '#EDEDED';
      }
      if (theme.secondary && theme.disabled) {
        return '#FFFFFF';
      }
      if (theme.primary) {
        return 'var(--primary-blue)';
      }
      if (theme.secondary) {
        return '#FFFFFF';
      }
      return 'var(--primary-blue)';
    }};

    font-family: var(--primaryFontFamily);
    font-size: 18px;
    line-height: 27px;
    padding: 0px 35px 4px 35px;
    border: none;
    color: var(--white);
  }
`;
