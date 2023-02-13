import {useDarkMode} from 'hooks';
import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styles';
import {IconBaseProps} from './type';

interface Props {
  liked?: boolean;
  strokeWidth?: number;
  onClick?(): void;
}

export const themeStyles = {
  dark: {
    colorLiked: 'var(--primary-blue)',
    strokeColorLiked: 'var(--primary-blue)',
    color: 'transparent',
    strokeColor: 'var(--white)',
  },
  light: {
    colorLiked: 'var(--primary-blue)',
    strokeColorLiked: 'var(--primary-blue)',
    color: 'transparent',
    strokeColor: 'var(--black)',
  },
};

const StyledLikeIcon = styled.button<Props>`
  display: flex;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  > svg {
    &:hover {
      cursor: pointer;

      > path {
        fill: ${(props) => {
          if (!props.liked) {
            return themeStyles[props.theme.mode].colorLiked;
          } else {
            return themeStyles[props.theme.mode].color;
          }
        }};
        stroke: ${(props) => {
          if (!props.liked) {
            return themeStyles[props.theme.mode].strokeColorLiked;
          } else {
            return themeStyles[props.theme.mode].strokeColor;
          }
        }};
      }
    }
  }
`;

export const LikeIcon = (props: IconBaseProps & Props) => {
  const {liked = false, strokeWidth = 3, width = 30, height = 30, onClick} = props;

  const [theme] = useDarkMode();

  let fill = '#FFF';
  if (theme === ThemeContext.light) {
    fill = liked ? themeStyles.light.colorLiked : themeStyles.light.color;
  } else if (theme === ThemeContext.dark) {
    fill = liked ? themeStyles.dark.colorLiked : themeStyles.dark.color;
  }

  let stroke = '#000';
  if (theme === ThemeContext.light) {
    stroke = liked ? themeStyles.light.strokeColorLiked : themeStyles.light.strokeColor;
  } else if (theme === ThemeContext.dark) {
    stroke = liked ? themeStyles.dark.strokeColorLiked : themeStyles.dark.strokeColor;
  }

  return (
    <StyledLikeIcon liked={liked} className="like-icon" onClick={onClick}>
      <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledLikeIcon>
  );
};
