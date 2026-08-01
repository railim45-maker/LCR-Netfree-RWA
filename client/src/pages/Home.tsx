import React from 'react';
import { useNavigate } from 'wouter'; // O il router che stai utilizzando nel progetto

export default function HomePage() {
  const [_, setLocation] = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12">
      {/* Intestazione */}
      <header className="max-w-6xl mx-auto w-full flex justify-between items-center border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wider text-emerald-400">LCR-NETFREE</h1>
          <p className="text-xs text-slate-400 tracking-widest uppercase">Ecosistema Decentralizzato & RWA</p>
        </div>
        <button 
          onClick={() => setLocation('/admin')}
          className="px-4 py-2 text-xs uppercase tracking-wider bg-slate-900 border border-slate-700 hover:border-emerald-500 rounded transition-all"
        >
          Admin Dashboard
        </button>
      </header>

      {/* Sezione Principale / Hero */}
      <main className="max-w-4xl mx-auto w-full my-12 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Architettura per la Sovranità Sistemica
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Infrastruttura integrata per la gestione delle risorse, l'economia del dono, la tokenizzazione degli asset reali (RWA) e i protocolli di sviluppo rigenerativo.
          </p>
        </div>

        {/* Griglia dei Collegamenti / Moduli Principali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
          
          {/* Modulo Territorio ed Ecologia */}
          <div 
            onClick={() => setLocation('/terra')}
            className="p-6 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-lg cursor-pointer transition-all space-y-3"
          >
            <span className="text-xs font-mono text-emerald-400">01 // DOMINIO</span>
            <h3 className="text-xl font-semibold">Terra & Risorse</h3>
            <p className="text-sm text-slate-400">
              Gestione del territorio, permacultura, acqua ed energia distribuita.
            </p>
            <div className="text-xs text-emerald-500 font-medium pt-2">Esplora modulo →</div>
          </div>

          {/* Modulo Tokenizzazione e Finanza RWA */}
          <div 
            onClick={() => setLocation('/tokenizzazione')}
            className="p-6 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-lg cursor-pointer transition-all space-y-3"
          >
            <span className="text-xs font-mono text-emerald-400">02 // ECONOMIA</span>
            <h3 className="text-xl font-semibold">Tokenizzazione RWA</h3>
            <p className="text-sm text-slate-400">
              Pool di investimento, Club Deal e registri di valore basati su asset reali.
            </p>
            <div className="text-xs text-emerald-500 font-medium pt-2">Esplora modulo →</div>
          </div>

          {/* Modulo Etica e Formazione / Economia del Dono */}
            <div 
            onClick={() => setLocation('/economia-dono')}
            className="p-6 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-lg cursor-pointer transition-all space-y-3"
          >
            <span className="text-xs font-mono text-emerald-400">03 // VISIONE</span>
            <h3 className="text-xl font-semibold">Economia del Dono</h3>
            <p className="text-sm text-slate-400">
              Framework valoriali, protocolli di benessere e sovranità legale.
            </p>
            <div className="text-xs text-emerald-500 font-medium pt-2">Esplora modulo →</div>
          </div>

        </div>
      </main>

      {/* Piè di pagina */}
      <footer className="max-w-6xl mx-auto w-full text-center border-t border-slate-800 pt-6 text-xs text-slate-500">
        <p>LCR-NetFree Master Register // Architettura Decentralizzata Attiva</p>
      </footer>
    </div>
  );
}
