import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Coins, Users, FileText, CheckCircle2, MessageCircle } from 'lucide-react';

export default function TokenizzazionePage() {
  const [formData, setFormData] = useState({ nome: '', email: '', telefono: '', interesse: 'Proprietario con 0,75%' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-24 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-600 font-serif">Tokenizzazione & Valore Reale • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <a href="/" className="text-stone-600 hover:text-stone-900 transition-colors font-serif">← Torna alla Home</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-6 space-y-20 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-6 pt-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <Coins className="w-3.5 h-3.5 text-amber-600" /> Architettura Finanziaria e Asset Reali
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Tokenizzazione del Valore
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif">
            Il patrimonio reale non viene venduto né svenduto: viene attivato attraverso la certificazione digitale e la tecnologia blockchain. Scopri le sei opportunità di partecipazione e i prospetti dedicati per costruire insieme la nuova economia del dono.
          </p>
        </div>

        {/* LE SEI POSSIBILITÀ E PROSPETTI */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Le Sei PosSIBILITÀ e i Prospetti</h2>
            <p className="text-stone-600 text-sm font-light font-serif">Seleziona il tuo ruolo all'interno dell'ecosistema per attivare il valore e sostenere la crescita circolare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. PROPRIETARIO CON 0,75% */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 01</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Proprietario con 0,75%</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Attivazione del patrimonio immobiliare o produttivo con riconoscimento della quota dedicata e integrazione diretta nel flusso di valore garantito.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Prospetto attivo</span>
                <span className="text-amber-800 font-semibold">Quota 0,75%</span>
              </div>
            </div>

            {/* 2. PROPRIETARIO SENZA 0,75% */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 02</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Proprietario senza 0,75%</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Soluzione dedicata all'inserimento e alla messa in sicurezza degli asset all'interno della rete senza la quota di partecipazione specifica, ottimizzando la gestione patrimoniale.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Prospetto attivo</span>
                <span className="text-stone-700 font-semibold">Gestione Asset</span>
              </div>
            </div>

            {/* 3. MINI LP */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 03</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Mini LP (Liquidity Pool)</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Partecipazione mirata alle pool di liquidità iniziali per sostenere i primi flussi operativi del sistema con esposizione bilanciata e protetta.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Supporto iniziale</span>
                <span className="text-amber-800 font-semibold">Liquidità Protetta</span>
              </div>
            </div>

            {/* 4. MEDIUM LP */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 04</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Medium LP</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Coinvolgimento intermedio nelle pool di valore per alimentare l'espansione della rete e consolidare la stabilità circolare dei progetti sul territorio.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Espansione rete</span>
                <span className="text-amber-800 font-semibold">Stabilità Circolare</span>
              </div>
            </div>

            {/* 5. MAXI LP */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 05</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Maxi LP</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Supporto avanzato di grande portata per il finanziamento strutturale dei grandi cantieri e delle infrastrutture cardine dell'ecosistema Net-Free.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Infrastrutture</span>
                <span className="text-amber-800 font-semibold">Grandi Cantieri</span>
              </div>
            </div>

            {/* 6. INFORMATORI & RESPONSABILI */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 06</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Informatori & Responsabili/Formatori</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Il cuore umano della diffusione: informatori che aprono la via e formatori che accompagnano le cerchie nella comprensione del metodo e della cura.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                <span>Diffusione e Cura</span>
                <span className="text-amber-800 font-semibold">Accompagnamento</span>
              </div>
            </div>

          </div>
        </div>

        {/* COLLEGAMENTI UFFICIALI & MASSIMO FUSTINONI */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-stone-900 text-stone-100 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-400 font-serif font-semibold">Piattaforme e Riferimenti</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold">La Tecnologia Blotix e il Fondatore Massimo Fustinoni</h3>
            <p className="text-stone-400 text-sm font-light">Esplora la documentazione ufficiale e gli articoli di approfondimento sulla finanza digitale e le proprietà digitali del futuro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <a href="https://www.blotix.io" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-stone-800/60 border border-stone-700/80 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400">Piattaforma Ufficiale</span>
                <h4 className="font-serif text-lg text-stone-100 group-hover:text-amber-300 transition-colors">Blotix.io</h4>
                <p className="text-xs text-stone-400 font-light">Protocolli di tokenizzazione e Real World Assets.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-serif pt-2">Visita blotix.io <ExternalLink className="w-3.5 h-3.5" /></span>
            </a>

            <a href="https://www.blotix.com" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-stone-800/60 border border-stone-700/80 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400">Network Globale</span>
                <h4 className="font-serif text-lg text-stone-100 group-hover:text-amber-300 transition-colors">Blotix.com</h4>
                <p className="text-xs text-stone-400 font-light">Infrastruttura internazionale e nodi operativi.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-serif pt-2">Visita blotix.com <ExternalLink className="w-3.5 h-3.5" /></span>
            </a>

            <a href="https://www.blotix.org" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-stone-800/60 border border-stone-700/80 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400">Fondazione & Community</span>
                <h4 className="font-serif text-lg text-stone-100 group-hover:text-amber-300 transition-colors">Blotix.org</h4>
                <p className="text-xs text-stone-400 font-light">Principi etici e governance della community.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-serif pt-2">Visita blotix.org <ExternalLink className="w-3.5 h-3.5" /></span>
            </a>
          </div>

          {/* APPROFONDIMENTI MASSIMO FUSTINONI */}
          <div className="pt-6 border-t border-stone-800 space-y-4">
            <h4 className="text-sm font-serif font-semibold text-amber-300 uppercase tracking-wider">Articoli e Interviste a Massimo Fustinoni</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif">
              <a href="https://www.blotix.io/index.php/component/content/article/massimo-fustinoni-racconta-la-finanza-digitale-tra-tokenizzazione-scarsita-intelligente-e-valore-reale?catid=8&Itemid=101" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/50 transition-all text-stone-300 hover:text-white flex flex-col justify-between space-y-2">
                <span>Finanza Digitale tra Scarsità Intelligente e Valore Reale</span>
                <span className="text-amber-400 inline-flex items-center gap-1">Leggi articolo <ExternalLink className="w-3 h-3" /></span>
              </a>
              <a href="https://www.magazinepopular.com/index.php/popular-2026-1" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/50 transition-all text-stone-300 hover:text-white flex flex-col justify-between space-y-2">
                <span>Magazine Popular (2026) • Eccellenza e Innovazione</span>
                <span className="text-amber-400 inline-flex items-center gap-1">Leggi intervista <ExternalLink className="w-3 h-3" /></span>
              </a>
              <a href="https://www.blotix.io/index.php/component/content/article/massimo-fustinoni-il-creatore-delle-proprieta-digitali-del-futuro-e-una-eccellenza-italiana?catid=15&Itemid=101" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/50 transition-all text-stone-300 hover:text-white flex flex-col justify-between space-y-2">
                <span>Il Creatore delle Proprietà Digitali del Futuro</span>
                <span className="text-amber-400 inline-flex items-center gap-1">Leggi approfondimento <ExternalLink className="w-3 h-3" /></span>
              </a>
            </div>
          </div>
        </div>

        {/* PARTECIPAZIONE WEBINAR & FORMAT "SONO INTERESSATO A…" */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Partecipa e Unisciti</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Partecipazione ai Webinar & Manifestazione d'Interesse</h3>
            <p className="text-stone-600 text-sm font-light font-serif">Compila il modulo per segnalare il tuo interesse. Verrai guidato all'interno dei nostri canali dedicati.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">Il tuo Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    placeholder="Dario Colognese" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-amber-500 font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">La tua Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="dario@esempio.it" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-amber-500 font-serif"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">Telefono / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="+39 333 1234567" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-amber-500 font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">Sono interessato a…</label>
                  <select 
                    value={formData.interesse}
                    onChange={(e) => setFormData({...formData, interesse: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-amber-500 font-serif"
                  >
                    <option value="Proprietario con 0,75%">Proprietario con 0,75%</option>
                    <option value="Proprietario senza 0,75%">Proprietario senza 0,75%</option>
                    <option value="Mini LP">Mini LP</option>
                    <option value="Medium LP">Medium LP</option>
                    <option value="Maxi LP">Maxi LP</option>
                    <option value="Informatori">Informatori</option>
                    <option value="Responsabili/formatori Informatori">Responsabili/formatori Informatori</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit"
                  className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
                >
                  Invia Richiesta e Accedi ai Webinar <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 rounded-3xl bg-amber-50/80 border border-amber-200 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-xl text-stone-900">Richiesta Registrata con Successo</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Grazie {formData.nome}. Il tuo interesse per <strong>{formData.interesse}</strong> è stato acquisito. Subito dopo la verifica, potrai accedere direttamente ai nostri canali riservati.
                </p>
              </div>
              
              <div className="pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://chat.whatsapp.com/ex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all font-serif"
                >
                  <MessageCircle className="w-4 h-4" /> Unisciti al Gruppo WhatsApp
                </a>
                <a 
                  href="https://whatsapp.com/channel/ex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-6 py-3 rounded-full text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all font-serif"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Segui il Canale WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>

      </main>

    </div>
  );
}
