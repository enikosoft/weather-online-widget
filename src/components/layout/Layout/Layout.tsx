import {Layout} from 'antd';
import styled from 'styled-components';
import {themeStyles} from 'styles';

export const ApplicationLayout = styled(Layout)`
  &&& {
    background: ${(props) => themeStyles[props.theme.mode].background};
    min-height: 100vh;
    padding: 40px 60px 40px 40px;

    > .site-layout {
      background: inherit;
      padding-left: 40px;
      margin: 0;
    }
  }
`;

export const P = styled.p`
  font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
  color: ${(props) => themeStyles[props.theme.mode].infoText};
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export default ApplicationLayout;
