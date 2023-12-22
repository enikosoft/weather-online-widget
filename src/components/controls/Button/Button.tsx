import {BaseButtonProps} from 'antd/es/button/button';
import React, {ReactElement} from 'react';
import {CSSObject, ThemeProvider} from 'styled-components';
import {Btn} from './style';

export interface ButtonProps extends BaseButtonProps {
  icon?: ReactElement;
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
  const {icon, small, large, medium, label = 'Button', primary, secondary, disabled, onClick, widthContent} = props;

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
        className="button"
      >
        {icon && <div className="button-icon">{icon}</div>}
        {label && <div className="button-label">{label || 'Click me'}</div>}
      </Btn>
    </ThemeProvider>
  );
};

export default Button;
