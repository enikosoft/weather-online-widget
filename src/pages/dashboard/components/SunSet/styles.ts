import styled from 'styled-components';
import {themeStyles} from 'styles';

export const DEFAULT_YELLOW = '#ffe600';

export interface SunRiseTheme {
  width: string;
  height: string;
  sunAnimationValue: number;
  sunIconSize: number;
  color?: string;
  fontFamily?: string;
  boldFontFamily?: string;
}

export const Wrapper = styled.div`
  position: relative;

  .sun-animation {
    position: absolute;
    height: ${(props) => props.theme.height};
    background-color: rgba(255, 255, 0, 0.4);
    transition: width 2s linear;
  }

  .sun-widget {
    position: relative;
    display: flex;
    justify-content: center;
    width: ${(props) =>
      `calc(${props.theme.width} + 50px)`}; // 50px - sun zone wrapper zone must be larger than sun zone
    padding-top: 10px;
    height: ${(props) => `calc(${props.theme.height} / 2 + 10px)`};
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    overflow-y: hidden;
    margin: auto;

    .sun-zone {
      margin: inherit;
      position: relative;
      width: ${(props) => props.theme.width};
      height: ${(props) => props.theme.height};
      overflow: hidden;
      border: 2px dashed rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }

    .sun-path {
      position: absolute;
      color: ${() => DEFAULT_YELLOW};
      display: flex;
      justify-content: center;
      max-width: 50px;
      height: ${(props) => props.theme.height};

      .sun-icon {
        position: relative;
        top: -10px;
        width: ${(props) => `${props.theme.sunIconSize}px`};
        height: ${(props) => `${props.theme.sunIconSize}px`};
        font-size: ${(props) => `${props.theme.sunIconSize}px`};
      }
    }

    .sun-animation {
      position: absolute;
      width: ${(props) => `calc(${props.theme.sunAnimationValue}px - 25px + ${props.theme.sunIconSize / 2}px )`};
      height: ${(props) => props.theme.height};
      background: linear-gradient(180deg, rgba(255, 230, 0, 0.12) 0%, rgba(255, 230, 0, 0) 100%);
      -webkit-transition: width 2s linear;
      transition: width 2s linear;
      overflow: hidden;

      &:before {
        display: block;
        position: relative;
        top: 0px;
        content: '';
        width: ${(props) => `calc(${props.theme.width} - 10px)`};
        height: ${(props) => `calc(${props.theme.height} - 10px)`};
        border: 3px solid yellow;
        border-color: ${() => DEFAULT_YELLOW};
        border-radius: 50%;
      }
    }
  }

  .legend {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${(props) => `calc(${props.theme.height} + 35px)`};
    margin: auto;
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
    font-size: 14px;
    > .sunrise {
      > :not(:first-child) {
        margin-left: 10px;
      }
    }
    > div {
      width: 80px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: start;

      .icon {
        margin-top: 10px;
      }
      .legend-horisont {
        width: 20px;
        position: absolute;
        left: 10px;
        border: none;
        border-top: 5px solid;
        border-color: ${() => DEFAULT_YELLOW};
        top: -3px;
      }

      .label {
        color: ${() => DEFAULT_YELLOW};
        line-height: 19px;
      }

      .time {
        color: ${(props) => themeStyles[props.theme.mode].color};
      }
    }

    > .sunset {
      align-items: end;

      > :not(:first-child) {
        margin-right: 10px;
      }
      .legend-horisont {
        right: 10px;
        left: unset;
      }

      .label {
        text-align: right;
      }
    }
  }
`;
