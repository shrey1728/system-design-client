import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OfflineOnlineIndicator } from './offline-online-indicator/OfflineOnlineIndicator';
import { OfflineOnlineIndicatorStatus } from './offline-online-indicator/OfflineOnlineIndicatorStatus';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/offline-online-indicator" element={<OfflineOnlineIndicator />} />
        <Route path="/offline-online-indicator/status" element={<OfflineOnlineIndicatorStatus />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
