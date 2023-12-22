import {Header} from 'antd/es/layout/layout';
import styled from 'styled-components';
import {mediaBreakpoints, themeStyles} from 'styles';

export const StyledHeader = styled(Header)<{isDashboard: boolean}>`
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

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding-left: 24px;
    }

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      height: auto;
      min-height: auto;
      flex-direction: column-reverse;
      padding-top: 8px;

      > div {
        width: 100%;
      }
    }

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 2;

      flex-direction: column;
      padding: 0 0 24px 55px;

      ${({isDashboard}) =>
        !isDashboard &&
        `
          padding: 16px 0 0 54px
        `}
    }
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
