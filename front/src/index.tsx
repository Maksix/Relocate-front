import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
