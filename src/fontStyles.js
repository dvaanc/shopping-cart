import { createGlobalStyle } from 'styled-components';
import NunitoSans from './assets/fonts/NunitoSans-Regular.ttf'
import NunitoSansBold from './assets/fonts/NunitoSans-Bold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'NunitoSans', 'NunitoSansBold';
    src: url(${NunitoSans}) format('ttf'), url(${NunitoSansBold}) format('ttf');
  }
`;

export default FontStyles;
