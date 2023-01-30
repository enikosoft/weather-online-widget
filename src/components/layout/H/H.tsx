import React, {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {DefaultHTheme, defaultHTheme, Title} from './style';

type HLevel = 1 | 2 | 3 | 4 | 5;

export interface HProps {
  children: ReactNode;
  level: HLevel;
  bold?: boolean;
  isSubtitle?: boolean;
  styling?: DefaultHTheme;
}

export const H = (props: HProps) => {
  const {children, level = 1, bold, isSubtitle} = props;

  const theme = {...defaultHTheme};

  return (
    <ThemeProvider theme={theme}>
      <Title level={level} bold={bold} isSubtitle={isSubtitle}>
        {children}
      </Title>
    </ThemeProvider>
  );
};

export default H;
