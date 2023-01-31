import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';

import { HashRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  
);