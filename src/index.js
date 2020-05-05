import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Render main app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('container')
);