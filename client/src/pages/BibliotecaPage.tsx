import React, { useState } from 'react';
import { ArrowLeft, Sparkles, BookOpen, Droplet, Atom, Leaf, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export default function BibliotecaPage() {
  const [categoriaAttiva, setCategoriaAttiva] = useState<'tutti' | 'acqua' | 'quantistica' | 'oli' | 'autodeterminazione'>('tutti');

  const risorse = [
    {
      id: 1,
      cat: 'acqua',
      titolo: 'Acqua & Memoria: La Strutturazione Molecolare',
      descrizione: 'Approfondimento sulle frequenze di risonanza dell’acqua, la memoria cellulare e i metodi di purificazione naturale per il tempio biologico.',
      tipo: 'Guida PDF / Articolo'
    },
    {
      id: 2,
      cat: 'quantistica',
      titolo: 'Fisica Quantistica e Campi di Risonanza',
      descrizione: 'Come la legge d’attrazione e i campi morfogenetici influenzano la co-creazione della realtà e la stabilità delle cerchie di cura.',
      tipo: 'Studio Specialistico'
    },
    {
      id: 3,
      cat: 'oli',
      titolo: 'Oli Essenziali e Centratura Energetica',
      descrizione: 'Protocolli di aromaterapia e frequenze vibrazionali per l’allineamento del corpo e la protezione immunitaria.',
      tipo: 'Protocollo Pratico'
    },
    {
      id: 4,
      cat: 'autodeterminazione',
      titolo: 'I Principi della Legge Naturale e Sovranità',
      descrizione: 'Manualistica di base per il riconoscimento dei confini della finzione commerciale e il ripristino dell’essere vivente.',
      tipo: 'Documento Fondamentale'
    },
  ];

  const risorseFiltrate = categoriaAttiva === 'tutti' ? risorse : risorse.filter(r => r.cat === categoriaAttiva);

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-emerald-100/30 via-amber-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-emerald-800 font-serif">
            📚 Biblioteca del Campo • Approfondimenti
          </span>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
        
        <div className="text-center space-y-4 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium font-serif shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> Archivi di Conoscenza e Formazione
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Biblioteca del Campo
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light font-serif">
            Esplora le sezioni tematiche per nutrire la tua consapevolezza e prepararti ai passaggi formativi della cerchia.
          </p>

          {/* FILTRI CATEGORIA */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 font-serif text-xs">
            <button onClick={() => setCategoriaAttiva('tutti')} className={`px-4 py-2 rounded-full transition-all cursor-pointer ${categoriaAttiva === 'tutti' ? 'bg-stone-900 text-stone-50 shadow-md' : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'}`}>Tutte le Risorse</button>
            <button onClick={() => setCategoriaAttiva('acqua')} className={`px-4 py-2 rounded-full transition-all cursor-pointer ${categoriaAttiva === 'acqua' ? 'bg-emerald-800 text-stone-50 shadow-md' : 'bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50'}`}>💧 Acqua & Memoria</button>
            <button onClick={() => setCategoriaAttiva('quantistica')} className={`px-4 py-2 rounded-full transition-all cursor-pointer ${categoriaAttiva === 'quantistica' ? 'bg-emerald-800 text-stone-50 shadow-md' : 'bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50'}`}>⚛️ Fisica Quantistica</button>
            <button onClick={() => setCategoriaAttiva('oli')} className={`px-4 py-2 rounded-full transition-all cursor-pointer ${categoriaAttiva === 'oli' ? 'bg-emerald-800 text-stone-50 shadow-md' : 'bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50'}`}>🌿 Oli Essenziali</button>
            <button onClick={() => setCategoriaAttiva('autodeterminazione')} className={`px-4 py-2 rounded-full transition-all cursor-pointer ${categoriaAttiva === 'autodeterminazione' ? 'bg-emerald-800 text-stone-50 shadow-md' : 'bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50'}`}>🛡️ Sovranità</button>
          </div>
        </div>

        {/* LISTA RISORSE */}
        <div className="grid grid-cols-1 gap-6">
          {risorseFiltrate.map((item) => (
            <div key={item.id} className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-emerald-50 text-emerald-900 rounded-full border border-emerald-200 font-semibold">
                  {item.tipo}
                </span>
                <span className="text-xs text-stone-400 font-mono">Archivio LCR</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">{item.titolo}</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light font-serif leading-relaxed">
                {item.descrizione}
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                <span className="text-xs text-stone-500 font-serif italic">Accessibile per i membri della cerchia</span>
                <button onClick={() => alert("Accesso al documento aperto nella Biblioteca.")} className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-emerald-900 hover:underline cursor-pointer">
                  Leggi Approfondimento <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}
