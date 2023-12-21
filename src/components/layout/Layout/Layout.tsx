import {Layout} from 'antd';
import styled from 'styled-components';
import {mediaBreakpoints, themeStyles} from 'styles';

export const ApplicationLayout = styled(Layout)`
  &&& {
    background: ${(props) => themeStyles[props.theme.mode].background};
    min-height: 100vh;
    padding: 40px 60px 40px 40px;

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding: 40px 16px;
    }

    > .site-layout {
      background: inherit;
      padding-left: 40px;
      margin: 0;
    }

    .app-content {
      background: red
      
      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        left: -16px;
        position: relative;
      }

      @media screen and (min-width: ${mediaBreakpoints.sm}px) {
        left: 0;
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
