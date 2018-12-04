import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const App = props => (
//   <div>123</div>
// )

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
