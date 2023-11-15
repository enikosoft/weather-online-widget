import styled from 'styled-components';
import {themeStyles} from 'styles';

export const DashboardLittleComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  > :last-child {
    width: 60%;
  }
  > .left-side {
    line-height: 20px;
    margin: 0;
    font-size: 24px;
    padding-top: 20px;
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
    color: ${(props) => themeStyles[props.theme.mode].color};
    display: flex;
    align-items: baseline;

    > span {
      color: var(--darked-white);
      font-size: 14px;
    }
  }

  > .right-side {
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
    color: var(--darked-white);
    font-size: 14px;
    p {
      margin-top: 10px;
    }
  }
`;

export const TimeWrapper = styled.div`
  height: inherit;
  overflow: hidden;
  border-radius: inherit;
  .city-time {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${(props) => themeStyles[props.theme.mode].color};

    .timer {
      font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
      font-size: 120px;
    }

    .timezone {
      font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
      font-size: 20px;
      padding-top: 20px;

      &__id {
        margin-right: 20px
      }

      &__name {
        padding-top: 5px;
        font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
      }
    }
  }
`;

export const BackgroundImage = styled.div<{src: string}>`
  height: inherit;
  background: ${(props) => `url(${props.src}) no-repeat top center`};
  background-position: center;
  background-size: cover;
  opacity: 0.6;
`;
