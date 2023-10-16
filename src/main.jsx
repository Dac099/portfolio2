import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { ViewCardContextProvider } from './context/viewCard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewCardContextProvider>
      <App />
    </ViewCardContextProvider>
  </React.StrictMode>,
)
