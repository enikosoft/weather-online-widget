import styled from 'styled-components';
import {themeStyles} from 'styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  position: relative;
  > .labels {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & :first-child {
      padding-right: 5px;
    }
    > p {
      line-height: 24px;
      color: var(--light-grey);
      font-size: 18px;
      margin-left: 5px;
    }

    > p.wind-speed {
      line-height: 20px;
      margin: 0;
      font-size: 25px;
      color: ${(props) => themeStyles[props.theme.mode].color};
    }
  }
`;

export const WindDirectionImage = styled.div<{direction: number}>`
  width: 30%;
  height: 50%;
  display: flex;
  margin: auto;
  color: ${(props) => themeStyles[props.theme.mode].color};
  transform: rotate(${(props) => props.direction}deg);

  > div {
    > svg {
      width: inherit;
      height: inherit;
    }
  }
`;
