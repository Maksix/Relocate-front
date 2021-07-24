import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

ReactDOM.render(
  <Suspense fallback={<div>loading</div>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
