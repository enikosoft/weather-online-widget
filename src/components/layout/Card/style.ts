import styled from 'styled-components';
import {ThemeContext, themeStyles} from 'styles';

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
  box-sizing: border-box;
  border: ${(props) => props.theme.hoverBorder};
  border-color: ${(props) => themeStyles[props.theme.mode].cardBg};
  -webkit-box-shadow: 0px 0px 12px 11px rgba(245, 245, 245, 1);
  -moz-box-shadow: 0px 0px 12px 11px rgba(245, 245, 245, 1);
  box-shadow: ${(props) =>
    props.theme.mode === ThemeContext.light ? '0px 0px 12px 11px rgba(245, 245, 245, 1)' : 'none'};
  :hover {
    border: ${(props) => props.theme.hoverBorder};
    border-color: var(--darked-white);
    cursor: ${(props) => (props.theme.clickable ? 'pointer' : 'initial')};
  }
`;

export const CardTitle = styled.h2`
  color: ${(props) => themeStyles[props.theme.mode].color};
  font-size: ${(props) => props.theme.titleSize};
  font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
  margin: 0;
`;
