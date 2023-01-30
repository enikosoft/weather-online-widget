import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #101014;
    --white: #FFFFFF;

    --primary-blue: #0038FF;
    --primary-grey: #202020;
    --light-grey: #616161;
    
    --primaryFontFamily: 'NotoSans Regular', sans-serif;
    --primaryBoldFamily: 'NotoSans Bold', sans-serif;
  }
`;
