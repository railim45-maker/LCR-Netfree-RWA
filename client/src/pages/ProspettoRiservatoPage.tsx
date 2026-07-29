import React from 'react';
import { ShieldCheck, FileText, FileCheck, Coins, ArrowRight, Lock, ExternalLink, HeartHandshake } from 'lucide-react';

export default function ProspettoRiservatoPage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-24 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/40 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER RISERVATO */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-amber-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs border border-amber-300 font-serif">
              <Lock className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-700 font-serif">Area Riservata • Co-Creazione e Prospetti LP</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <a href="/" className="text-stone-600 hover:text-stone-900 transition-colors font-serif">← Torna alla Home</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE RISERVATO */}
      <main className="container max-w-4xl mx-auto px-6 space-y-20 relative z-10">
        
        {/* INTRODUZIONE RISERVATA */}
        <div className="text-center space-y-6 pt-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/80 border border-amber-300 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> Accesso Esclusivo su Invito
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Il Prospetto di Co-Creazione e Attivazione del Valore
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif">
            Hai ricevuto questo link riservato perché hai manifestato un interesse autentico. Qui trovi la trasparenza totale su come il contributo di capitale attiva i volumi, sostiene l'avvio dell'ecosistema reale e definisce la nostra alleanza di co-creazione.
          </p>
        </div>

        {/* SEZIONE FILOSOFICA: IL CONTRIBUTO DI CO-CREAZIONE */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Patto Fiduciario</span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">Contribuire alla Creazione di Valore Reale</h3>
            </div>
          </div>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif">
            La messa a disposizione di capitale come Liquidity Provider (LP) non è uno strumento finanziario speculativo aperto al pubblico, ma un atto consapevole di <strong>co-creazione</strong>. Serve a coprire i costi iniziali, attivare i cantieri operativi e dare stabilità all'intera infrastruttura Net-Free, generando benefici reciproci all'interno di una comunità etica e sovrana.
          </p>
        </div>

        {/* LE TRE FASCE DI CO-CREAZIONE */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Le Tre Fasce di Contributo e Sostegno</h2>
            <p className="text-stone-600 text-sm font-light font-serif">I livelli di attivazione e messa a disposizione dei volumi all'interno dell'ecosistema.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Fascia 1 */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Fascia I</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Sviluppo Iniziale</h3>
                <div className="text-lg font-serif font-bold text-amber-900">Da € 1.000 a € 50.000</div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Dedicato alla copertura dei primi volumi di attivazione di base e al sostegno dei primi nuclei operativi territoriali.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-serif">
                Co-creazione di base
              </div>
            </div>

            {/* Fascia 2 */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Fascia II</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Espansione Territoriale</h3>
                <div className="text-lg font-serif font-bold text-amber-900">Da € 50.001 a € 500.000</div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Supporto strutturale all'espansione della rete, consolidamento dei progetti locali e sviluppo dei cantieri intermedi.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-serif">
                Attivazione cantieri
              </div>
            </div>

            {/* Fascia 3 */}
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Fascia III</span>
                <h3 className="text-xl font-bold font-serif text-stone-900">Infrastruttura Globale</h3>
                <div className="text-lg font-serif font-bold text-amber-900">Da € 500.000 in su</div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Supporto avanzato di grande portata per la realizzazione e la messa in sicurezza delle grandi infrastrutture dell'ecosistema.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-serif">
                Sovranità strutturale
              </div>
            </div>

          </div>
        </div>

        {/* DOCUMENTAZIONE E CONTRATTUALISTICA UFFICIALE */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-stone-900 text-stone-100 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-400 font-serif font-semibold">Trasparenza Legale</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold">Documentazione e Contratti Ufficiali</h3>
            <p className="text-stone-400 text-sm font-light">Consulta e scarica la contrattualistica che regola i rapporti di tokenizzazione e licenza d'uso all'interno del network.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            <a 
              href="https://www.blotix.io/images/doc/Contratto_Tokenization_Blotix.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition-colors">Contratto di Tokenizzazione</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Documento legale ufficiale che stabilisce i termini e le condizioni per la certificazione e la gestione degli asset reali tokenizzati.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-400 pt-2">
                Scarica PDF Ufficiale <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            <a 
              href="https://www.blotix.io/images/doc/BLOTIX_NFT_License_Agreement.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 rounded-3xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition-colors">BLOTIX NFT License Agreement</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Accordo di licenza d'uso che disciplina i diritti, i doveri e le tutele associati alle proprietà digitali nell'ecosistema Blotix.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-400 pt-2">
                Scarica Licenza PDF <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>
        </div>

      </main>

    </div>
  );
}
