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

export const size = {
  // mobileS: '320px',
  // mobileM: '375px',
  // mobileL: '425px',
  // tablet: '768px',
  // laptop: '1024px',

  sm: `(min-width: 576px)`,
  xl: `(min-width: 1200px)`,
};
