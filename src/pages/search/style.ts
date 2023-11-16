import styled from 'styled-components';
import {Layout} from 'antd';

import logo from 'assets/images/SearchBackground-1.jpg';
import {mediaBreakpoints} from 'styles';

export const SearchPageLayout = styled(Layout)`
  &&& {
    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      padding: 88px 24px;
    }

    @media screen and (min-width: ${mediaBreakpoints.xs}px) {
      padding: 88px 24px;
    }

    @media screen and (min-width: ${mediaBreakpoints.lg}px) {
      padding: 105px 88px;
    }

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

    .determine-location {
      justify-content: flex-end;
      display: inherit;

      @media screen and (max-width: ${mediaBreakpoints.md}px) {
        margin-top: 48px;
        justify-content: unset;
      }
    }

    .nav-block {
      display: inherit;
      justify-content: space-between;
      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        flex-direction: column;
      }

      .account-block {
        display: inherit;
        justify-content: inherit;
       
        @media screen and (max-width: ${mediaBreakpoints.xs}px) {
          min-width:100%;
        }

        @media screen and (min-width: ${mediaBreakpoints.xs}px) {
          min-width: 350px;
        }

        @media screen and (min-width: ${mediaBreakpoints.lg}px) {
          min-width: 350px;
        }
      }
    }
   
    .app-name {
      font-size: 80px;
 
      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        font-size: 36px;
      }

      @media screen and (min-width: ${mediaBreakpoints.xs}px) {
        font-size: 56px;
      }

      @media screen and (min-width: ${mediaBreakpoints.lg}px) {
        font-size: 80px;
      }
    }

    .app-name-subtitle {
      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        font-size: 18px;
      }

      @media screen and (min-width: ${mediaBreakpoints.xs}px) {
        font-size: 24px;
      }

      @media screen and (min-width: ${mediaBreakpoints.lg}px) {
        font-size: 32px;
      }
    }
  }
`;

export const CenteredWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 520px;

  @media screen and (max-width: ${mediaBreakpoints.md}px) {
    top: 45%;
  }

  > div {
    max-width: inherit;
  }
`;
