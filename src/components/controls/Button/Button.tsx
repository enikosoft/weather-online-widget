import React from 'react';
import {Btn} from './style';
import {CSSObject, ThemeProvider} from 'styled-components';
import {BaseButtonProps} from 'antd/es/button/button';

export interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  widthContent?: boolean;
  extraStyles?: CSSObject;
  large?: boolean;
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Button = (props: ButtonProps) => {
  const {small, large, medium, label = 'Button', primary, secondary, disabled, onClick, children, widthContent} = props;

  const type = primary ? 'primary' : '';

  const theme = {
    small,
    large,
    medium,
    widthContent,
    disabled,
    primary,
    secondary,
  };

  return (
    <ThemeProvider theme={theme}>
      <Btn
        // @ts-ignore defferenr types with btn from antd
        onClick={onClick}
        type={type || 'primary'}
      >
        {children ? children : label ? label : 'Click me'}
      </Btn>
    </ThemeProvider>
  );
};

export default Button;
