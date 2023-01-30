import {Layout} from 'antd';
import styled from 'styled-components';
import {themeStyles} from 'styles';

export const ApplicationLayout = styled(Layout)`
  &&& {
    background: ${(props) => themeStyles[props.theme.mode].background};
    height: 100vh;
    padding: 40px 60px 40px 40px;
  }
`;

export const CenteredWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 1216px;
  height: 520px;

  > div {
    max-width: inherit;
  }
`;

export default ApplicationLayout;
