import {useDarkMode} from 'hooks';
import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styles';
import {IconBaseProps} from './type';

const StyledMoonIcon = styled.div`
  // styles for moon icon
  display: flex;
`;

export const MoonIcon = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 24, height = 24, color} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? 'green' : '#616161';

  return (
    <StyledMoonIcon>
      <svg className="moon-icon" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <g fill={defaultColor}>
          <path
            d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z"
            fill={defaultColor}
          />
        </g>
        {''}
      </svg>
    </StyledMoonIcon>
  );
};
