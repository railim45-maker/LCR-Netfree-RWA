import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Protezione globale contro URL vuoti passati a librerie di terze parti o client di rete
if (typeof window !== 'undefined') {
  const OriginalURL = window.URL;
  // @ts-ignore
  window.URL = function(url: string | URL, base?: string | URL) {
    if (!url || (typeof url === 'string' && url.trim() === '')) {
      return new OriginalURL(window.location.origin);
    }
    return new OriginalURL(url, base);
  };
  window.URL.prototype = OriginalURL.prototype;
  Object.assign(window.URL, OriginalURL);
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
