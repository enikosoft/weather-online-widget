import {Row} from 'antd';
import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';

export const MainRow = styled(Row)`
  min-height: 350px;

  @media screen and (max-width: ${mediaBreakpoints.xs}px) {
    flex-direction: column;
    align-items: center;
  }

  .temperature-block {
    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      padding: 0 0 8px 0 !important;
    }

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding: 8px !important;
    }

    @media screen and (min-width: ${mediaBreakpoints.lg}px) {
      padding: 16px 0 0 20px !important;
    }
  }

  .weather-widgets-block {
    .weather-widgets-block-1 {
      min-height: 70%;

      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        > div {
          padding: 8px 0 !important;
        }
      }

      @media screen and (max-width: ${mediaBreakpoints.lg}px) {
        > div {
          padding: 8px !important;
        }
      }

      > div {
        padding: 20px 0 16px 20px;
      }
    }

    .weather-widgets-block-2 {
      min-height: 30%;

      > div {
        padding: 0 0 0 20px;
      }

      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        > div {
          padding: 8px 0 !important;
        }
      }

      @media screen and (max-width: ${mediaBreakpoints.lg}px) {
        > div {
          padding: 8px !important;
        }
      }
    }

    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      align-items: center;

      > div > div {
        padding: 0;
      }
    }
  }
`;
