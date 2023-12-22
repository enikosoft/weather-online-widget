import styled from 'styled-components';

import {Typography} from 'antd';
const {Title: AntdTitle} = Typography;

export interface DefaultTitleTheme {
  padding?: string;
  fontSize?: string;
  color?: string;
  fontFamily?: string;
  boldFontFamily?: string;
}

export const defaultTitleTheme: DefaultTitleTheme = {
  padding: '20px 0px',
  fontSize: '32px',
  color: 'var(--white)',
  fontFamily: 'var(--primaryFontFamily)',
  boldFontFamily: 'var(--primaryBoldFamily)',
};

interface TitleProps {
  readonly $bold?: boolean;
  readonly $secondary?: boolean;
}

export const Title = styled(AntdTitle)<TitleProps>`
  &&& {
    margin: 0;
    padding: 0;
    margin-bottom: 0;

    font-weight: ${(props) => {
      if (props.$bold) {
        return 800;
      }

      return 400;
    }};

    font-family: ${(props) => {
      if (props.$bold) {
        return props.theme.boldFontFamily;
      }

      return props.theme.fontFamily;
    }};

    color: ${(props) => props.theme.color};
    padding: ${({$secondary, theme}) => ($secondary ? 0 : theme.padding)};
  }
`;
