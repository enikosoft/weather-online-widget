import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {CardTitle, StyledCardWrapper} from './style';

interface Props {
  padding?: number;
  height?: number;
  title?: string;
  titleSize?: number;

  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  css?: any;
}

export const Card = (props: Props) => {
  const {titleSize = 16, title, children, padding = 40, height, css} = props;

  const styles = {
    padding: `${padding}px`,
    titleSize: `${titleSize}px`,
    ...(height ? {height: `${height}px`} : {height: '100%'}),
    ...css,
  };

  return (
    <ThemeProvider theme={{...styles}}>
      <StyledCardWrapper>
        {!!title?.length && <CardTitle>{title}</CardTitle>}
        {children}
      </StyledCardWrapper>
    </ThemeProvider>
  );
};
