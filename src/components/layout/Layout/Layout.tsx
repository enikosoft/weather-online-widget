import {Layout} from 'antd';
import styled from 'styled-components';
import {mediaBreakpoints, themeStyles} from 'styles';

export const ApplicationLayout = styled(Layout)`
  &&& {
    background: ${(props) => themeStyles[props.theme.mode].background};
    height: 100svh;
    padding: 40px 60px 40px 40px;
    overflow: scroll;

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding: 40px 16px;
    }

    > .site-layout {
      background: inherit;
      padding-left: 40px;

      margin: 0;
      @media screen and (max-width: ${mediaBreakpoints.lg}px) {
        padding-left: 0px;
      }
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
