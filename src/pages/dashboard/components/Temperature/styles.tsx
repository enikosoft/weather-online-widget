import styled from 'styled-components';
import {themeStyles} from 'styles';

export const Wrapper = styled.div`
  .ant-row {
    width: 100%;

    .ant-col {
      width: 50%;

      div {
        color: ${(props) => themeStyles[props.theme.mode].color};
        font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
      }
      .temperature {
        font-size: 60px;
        line-height: 65px;
      }

      .conditions {
        font-size: 16px;
        line-height: 35px;
      }

      .condition_icon {
        width: 100%;
        height: 150px;

        img {
          width: 205px;
        }
      }

      .description {
        font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
        font-size: 14px;
        color: ${(props) => themeStyles[props.theme.mode].infoText};
      }
    }
  }

  .updatedAt {
    justify-content: space-between;
    padding-top: 32px;
    align-items: center;
    div {
      font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
      color: ${(props) => themeStyles[props.theme.mode].color};
      font-size: 16px;
    }

    div.updatedAt-time {
      font-family: ${(props) => themeStyles[props.theme.mode].fontBoldFamily};
      font-size: 24px;
    }
  }
  .ant-row:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    padding-bottom: 32px;
  }
`;
