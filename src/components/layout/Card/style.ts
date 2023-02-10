import styled from 'styled-components';
import {themeStyles} from 'styles';

export interface DefaultCardStyles {
  padding: string;
  titleSize: string;
}

export const defaultCardStyles: DefaultCardStyles = {
  padding: '40px',
  titleSize: '16px',
};

export const StyledCardWrapper = styled.div`
  background: gray;
  background: ${(props) => themeStyles[props.theme.mode].cardBg};
  padding: ${(props) => props.theme.padding};
  border-radius: 20px;
  height: ${(props) => props.theme.height};
  color: ${(props) => themeStyles[props.theme.mode].color};
`;

export const CardTitle = styled.h2`
  color: ${(props) => themeStyles[props.theme.mode].color};
  font-size: ${(props) => props.theme.titleSize};
  font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
  margin: 0;
`;