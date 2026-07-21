import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Componente di errore di riserva nel caso in cui un modulo tenti un parsing errato all'avvio
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Errore catturato dall'ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center', color: '#333' }}>
          <h2 style={{ color: '#e53e3e' }}>Caricamento in corso...</h2>
          <p>Stiamo sincronizzando l'interfaccia con l'ambiente cloud.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '20px', padding: '10px 20px', background: '#3182ce', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Ricarica Pagina
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
