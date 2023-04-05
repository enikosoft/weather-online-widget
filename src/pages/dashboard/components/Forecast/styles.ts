import styled from 'styled-components';
import {themeStyles} from 'styles';

export const Wrapper = styled.div`
  font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
  color: ${(props) => themeStyles[props.theme.mode].color};
  font-size: 24px;

  .forecast-controls {
    padding-bottom: 32px;
  }
`;

export const Item = styled.div`
  &&& {
    .forecast {
      height: 60px;
      margin-bottom: 16px;
      div:not(:first-child) {
        padding-left: 32px;
      }

      div {
        line-height: 60px;
        font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
        color: ${(props) => themeStyles[props.theme.mode].color};
        font-size: 20px;
      }

      &-icon {
        height: 100%;
        display: flex;
        align-items: center;
        width: 80px;

        img {
          width: 75px;
        }
      }

      div &-temperature {
        font-size: 20px;
        display: flex;
        p {
          font-size: 16px;
        }
      }

      div &-date,
      div &-day {
        > p {
          font-size: 16px;
        }
      }
    }
  }
`;
