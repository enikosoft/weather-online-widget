import styled from 'styled-components';
import {HProps} from './H';

export interface DefaultHTheme {
  padding?: string;
  fontSize?: string;
  color?: string;
  fontFamily?: string;
  boldFontFamily?: string;
}

export const defaultHTheme: DefaultHTheme = {
  padding: '20px 0px',
  fontSize: '32px',
  color: 'var(--white)',
  fontFamily: 'var(--primaryFamily)',
  boldFontFamily: 'var(--primaryBoldFamily)',
};

export const Title = styled.div<HProps>`
  font-size: ${(props) => {
    if (props.level === 1) {
      return '32px';
    }
    if (props.level === 2) {
      return '48px';
    }
    if (props.level === 3) {
      return '64px';
    }
    if (props.level === 4) {
      return '72px';
    }
    if (props.level === 5) {
      return '120px';
    }
    return props.theme.fontSize;
  }};

  font-family: ${(props) => {
    if (props.bold) {
      return props.theme.boldFontFamily;
    }

    return props.theme.fontFamily;
  }};

  color: ${(props) => props.theme.color};

  padding: ${(props) => {
    if (props.isSubtitle) {
      return '0';
    }
    return props.theme.padding;
  }};
`;
