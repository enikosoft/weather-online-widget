import styled from 'styled-components';
import {mediaBreakpoints, ThemeContext, themeStyles} from 'styles';

export const Button = styled.div`
  width: 50%;
  color: white;
  display: flex;
  align-items: center;
  height: 32px;
  > div {
    margin: auto;
    flex-direction: row;
    display: flex;
    height: 30px;
    > .label {
      font-family: var(--primaryBoldFamily);
      font-size: 15px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.36);
      line-height: 25px;
      color: ${(props) => themeStyles[props.theme.mode].color};
      opacity: 0.36;

      padding-left: 10px;
    }
    > div:not(.label) {
      padding-top: 2px;
    }
  }

  &.active {
    background: ${(props) => {
      if (props.theme.mode === ThemeContext.dark) return '#2C2C2C';
      return 'var(--white)';
    }};
    box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49),
      inset 0px 2px 1px rgba(255, 255, 255, 0.06);
    border-radius: 32px;
    > div > .label {
      opacity: 1;
      color: ${(props) => themeStyles[props.theme.mode].color};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledThemeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  #btn {
    display: inherit;
    align-items: center;
    padding: 9px;
    position: relative;

    width: 296px;
    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      width: 120px;
    }

    height: 50px;
    background: #151515;
    background: ${(props) => themeStyles[props.theme.mode].themeBtnBg};

    border-radius: 60px;
  }
`;
