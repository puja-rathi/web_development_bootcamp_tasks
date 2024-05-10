import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// created root and rendered App component from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
