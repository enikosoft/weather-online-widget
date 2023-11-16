import {ReactNode} from 'react';

import {ThemeProvider} from 'styled-components';
import {TitleProps as AntdTitleProps} from 'antd/es/typography/Title';

import {DefaultTitleTheme, defaultTitleTheme, Title} from './style';

export interface TitleProps extends AntdTitleProps {
  className?: string
  bold?: boolean;
  secondary?: boolean;
  styling?: DefaultTitleTheme;
  children: ReactNode;
}

export const H = (props: TitleProps) => {
  const {className, children, level = 1, bold, secondary} = props;

  const theme = {...defaultTitleTheme};

  return (
    <ThemeProvider theme={theme}>
      <Title className={className} level={level} $secondary={secondary} $bold={bold}>
        {children}
      </Title>
    </ThemeProvider>
  );
};

export default H;
