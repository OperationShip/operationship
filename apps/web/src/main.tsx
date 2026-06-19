import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Core CSS for the node graph rendering
import 'reactflow/dist/style.css'; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
