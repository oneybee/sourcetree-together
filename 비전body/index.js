import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/style.scss';

ReactDOM.render(
  <BrowserRouter basename="/datavisual-react">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
