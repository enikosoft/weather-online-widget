import styled from 'styled-components';
import {ThemeContext, themeStyles} from 'styles';

export interface DefaultSelectTheme {
  height?: string;
  maxWidth?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  scrollColor?: string;

  fontSize?: string;
  fontFamily?: string;
  placeholderColor?: string;
  zIndex?: number;
}

export const defaultSelectTheme: DefaultSelectTheme = {
  height: '56px',
  maxWidth: '560px',
  borderRadius: '20px',
  backgroundColor: 'white',
  hoverBackgroundColor: '#eee',
  fontSize: '16px',
  fontFamily: 'var(--primaryFontFamily)',
  placeholderColor: 'grey',
  zIndex: 0,
};

export const getSelectStyles = (themeMode: ThemeContext, large?: boolean): DefaultSelectTheme => {
  return {
    ...defaultSelectTheme,
    height: large ? '80px' : defaultSelectTheme.height,
    maxWidth: large ? '1090px' : defaultSelectTheme.maxWidth,
    backgroundColor: large ? 'var(--white)' : themeStyles[themeMode].backgroundInput,
    color: large ? 'var(--black)' : themeStyles[themeMode].color,
    borderRadius: large ? '30px' : defaultSelectTheme.borderRadius,
    scrollColor: large ? 'var(--black)' : themeStyles[themeMode].scrollColor,
  };
};

export const StyledReactSearchAutocomplete = styled.div`
  position: relative;
  height: ${(props) => props.theme.height};
  max-width: ${(props) => props.theme.maxWidth};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};

  > .wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;

    background-color: ${(props) => props.theme.backgroundColor};
    border: ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.color};
    z-index: ${(props) => props.theme.zIndex};
  }
`;

export const StyledResults = styled.div`
  padding: 0 24px 20px 0;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0px 0 16px 0;

    ::-webkit-scrollbar {
      width: 6px;
      height: 100%;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.scrollColor};
      border-radius: 10px;
    }

    font-size: ${(props) => {
      if (props.theme.large) return '1.5em';

      return '1em';
    }};
    max-height: 200px;
    overflow: scroll;
  }
`;
