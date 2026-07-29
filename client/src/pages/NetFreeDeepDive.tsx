import React from 'react';

export const NetFreeDeepDive: React.FC = () => {
  return (
    <div className="netfree-deep-dive-container">
      <h2>Protocolli di Purificazione</h2>
      
      {/* Sezione Protocolli di Purificazione e Diossido di Cloro */}
      <div className="protocol-section">
        <h3>Protocolli Avanzati con Diossido di Cloro</h3>
        <p>Soluzioni e presidi per la sanificazione profonda, l'igiene e la rimozione di agenti patogeni secondo i protocolli dedicati.</p>
        
        <div className="document-links">
          <h4>Riferimenti Documentali e Manualistica Ufficiale</h4>
          <ul>
            <li>
              <strong>Manuale di Riferimento:</strong>{' '}
              <a 
                href="/protocolli-salute-benessere/Salute%20Proibita%20-%20Andreas%20Kalcker%20CORRETTO.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Salute Proibita (Andreas Kalcker)
              </a>[cite: 2]
              <p className="link-desc">
                Testo completo sulla biofisica naturale, l'alcalinizzazione corporea, la riattivazione della combustione cellulare e i dati clinici dei test condotti in Uganda dalla Croce Rossa[cite: 2].
              </p>
            </li>
            <li>
              <strong>Scheda Tecnica Operativa:</strong>{' '}
              <a 
                href="/protocolli-salute-benessere/Cos'%C3%A8%20il%20DIOSSIDO%20DI%20CLORO%20(CLO2).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cos'è il Diossido di Cloro (CDS)
              </a>
              <p className="link-desc">
                Definizione del CDS allo 0,3% (3000 ppm) a pH neutro, meccanismo d'azione biocida selettivo a pH acido, conversione in ossigeno e sale, e gestione della reazione di Herxheimer.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetFreeDeepDive;
