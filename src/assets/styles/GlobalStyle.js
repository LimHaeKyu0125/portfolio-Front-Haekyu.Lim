import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import MontserratThin from '../styles/font/Montserrat-Thin.ttf';
import MontserratExtraLight from '../styles/font/Montserrat-ExtraLight.ttf';
import MontserratLight from '../styles/font/Montserrat-Light.ttf';
import MontserratRegular from '../styles/font/Montserrat-Regular.ttf';
import MontserratMidium from '../styles/font/Montserrat-Medium.ttf';
import MontserratMediumItalic from '../styles/font/Montserrat-MediumItalic.ttf';
import MontserratSemiBold from '../styles/font/Montserrat-SemiBold.ttf';
import MontserratBold from '../styles/font/Montserrat-Bold.ttf';
import MontserratBlack from '../styles/font/Montserrat-Black.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html, body {
    font-family: 'Montserrat';
    font-weight: 500;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
