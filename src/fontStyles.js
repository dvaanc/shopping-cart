import { createGlobalStyle } from 'styled-components';
import NunitoSans from './assets/fonts/NunitoSans-Regular.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSans}) format('ttf');
  }
`;

export default FontStyles;
