import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './globalStyles';
import FontStyles from './fontStyles';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);