import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #101014;
    --white: #FFFFFF;

    --primary-blue: #0038FF;
    --primary-grey: #202020;
    --light-grey: #616161;

    --darked-white: rgba(255, 255, 255, 0.5);
    
    --primaryFontFamily: 'NotoSans Regular', sans-serif;
    --primaryBoldFamily: 'NotoSans Bold', sans-serif;
  }
`;

export const mediaBreakpoints = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
