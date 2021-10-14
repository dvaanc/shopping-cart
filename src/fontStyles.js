import { createGlobalStyle } from 'styled-components';
import NunitoSans from './assets/fonts/NunitoSans-Regular.ttf'
import NunitoSansBold from './assets/fonts/NunitoSans-Bold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSans}) format('ttf');
  }
  @font-face {
    font-family: 'NunitoSansBold';
    src: url(${NunitoSansBold}) format('ttf');
  }
`;

export default FontStyles;
