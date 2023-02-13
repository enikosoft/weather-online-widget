/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {CardTitle, StyledCardWrapper} from './style';

interface Props {
  padding?: number;
  height?: number;
  title?: string;
  titleSize?: number;

  children: ReactNode;
  clickable?: boolean;
  onClick?(): void;
  css?: any;
}

export const Card = (props: Props) => {
  const {titleSize = 16, title, children, padding = 40, height, css, clickable, onClick} = props;

  const styles = {
    padding: `${padding}px`,
    titleSize: `${titleSize}px`,
    ...(height ? {height: `${height}px`} : {height: '100%'}),
    ...css,
    ...(clickable ? {hoverBorder: `1px solid`} : {}),
  };

  const handleOnlcik = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <ThemeProvider theme={{...styles}}>
      <StyledCardWrapper onClick={handleOnlcik}>
        {!!title?.length && <CardTitle>{title}</CardTitle>}
        {children}
      </StyledCardWrapper>
    </ThemeProvider>
  );
};
