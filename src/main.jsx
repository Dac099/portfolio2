import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { LanguageContextProvider } from './context/languajeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
)
