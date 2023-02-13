import styled from 'styled-components';
import {themeStyles} from 'styles';

export const StyledFavoriteWrapper = styled.div`
  padding-top: 40px;
`;

export const StyledFavoriteCard = styled.div`
  display: flex;
  flex-direction: row;

  .city-photo {
    width: 145px;
    height: 145px;
    border-radius: 12px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .city-info {
    font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
    color: ${(props) => themeStyles[props.theme.mode].color};
    width: calc(100% - 145px);
    padding-left: 24px;
    display: inherit;
    flex-direction: column;
    justify-content: space-between;

    .name {
      display: flex;
      font-size: 24px;
      justify-content: space-between;
    }

    .weather {
      .forecast {
        align-items: center;

        div {
          font-size: 20px;
          height: fit-content;
        }

        div &-temperature {
          span {
            font-size: 18px;
            color: var(--darked-white);
          }
        }
      }
    }
  }
`;
