import {Header} from 'antd/es/layout/layout';
import styled from 'styled-components';
import {themeStyles} from 'styles';

export const StyledHeader = styled(Header)`
  &&& {
    min-height: 60px;
    background: ${(props) => themeStyles[props.theme.mode].background};
    font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
    color: ${(props) => themeStyles[props.theme.mode].color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;

export const CitySelectWrapper = styled.div`
  flex-grow: 1;
`;

export const CityTitleStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 55px 0 0;
`;

export const HeaderText = styled.p`
  background: inherit;
  font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
  color: ${(props) => themeStyles[props.theme.mode].color};
  font-size: 32px;
  margin: 0;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const HeaderSubText = styled(HeaderText)`
  font-size: 18px;
  padding-bottom: 0px;
`;
