import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Reactus from './Reactus';
import Logo from './Logo';

ReactDOM.render(
  <React.StrictMode>
    <App name="Skif"/>
    <Reactus />
    <Logo />
  </React.StrictMode>,
  document.getElementById('root')
);