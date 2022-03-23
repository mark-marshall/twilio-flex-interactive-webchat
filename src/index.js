// Comment out following polyfills if you don't need IE11 support
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Package Imports
import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';

// CSS Imports
import './index.css';

// Component Imports
import App from './App.jsx';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// Render into DOM
ReactDOM.render(
  <App configuration={window.appConfig} />,
  document.getElementById('root')
);

registerServiceWorker();
