import styled from 'styled-components';
import logo from 'assets/images/SearchBackground-1.jpg';
import {Layout} from 'antd';

export const SearchPageLayout = styled(Layout)`
  &&& {
    padding: 105px 88px;
    background: url(${logo});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
    height: 100vh;

    &:before {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.37);
    }
  }
`;

export const Diq = styled.span`
  font-family: var(--primaryFontFamily);
  font-size: 67px;
  color: white;
`;

export const Diq2 = styled.span`
  font-family: 'NotoSans Regular';
  font-size: 67px;
  color: white;
`;

export const Diq3 = styled.span`
  font-family: 'Underdog';
  font-size: 67px;
  color: white;
`;
