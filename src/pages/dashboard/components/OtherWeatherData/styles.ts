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

  .timer {
    font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
    color: ${(props) => themeStyles[props.theme.mode].color};
    font-size: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
`;

export const BackgroundImage = styled.div<{src: string}>`
  height: inherit;
  background: ${(props) => `url(${props.src}) no-repeat top center`};
  background-position: center;
  background-size: cover;
  opacity: 0.6;
`;
