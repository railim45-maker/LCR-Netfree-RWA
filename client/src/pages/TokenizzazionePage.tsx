import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Coins, Users, FileText, CheckCircle2, MessageCircle, Calculator, FileCheck, CheckSquare, Square, Lock, Layers, Lightbulb, Building2, Landmark, HeartHandshake, Play } from 'lucide-react';

export default function TokenizzazionePage() {
  const [formData, setFormData] = useState({ 
    nome: '', 
    email: '', 
    telefono: '', 
    interessi: [] as string[] 
  });
  const [submitted, setSubmitted] = useState(false);

  const opzioniInteresse = [
    "Proprietario con 0,75%",
    "Proprietario senza 0,75%",
    "Liquidity Provider (Co-Creazione Ecosistema)",
    "Informatori",
    "Responsabili/formatori Informatori"
  ];

  const handleCheckboxChange = (opzione: string) => {
    setFormData(prev => {
      const exists = prev.interessi.includes(opzione);
      if (exists) {
        return { ...prev, interessi: prev.interessi.filter(item => item !== opzione) };
      } else {
        return { ...prev, interessi: [...prev.interessi, opzione] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.interessi.length === 0) {
      alert("Seleziona almeno un'opzione di interesse.");
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const interessiStr = formData.interessi.join(', ');
    const numeroWhatsApp = "3477194486";
    const emailRiferimento = "biofinsrls@gmail.com";
    
    const testo = `Salve, sono ${formData.nome}.\nConfermo la mia presenza al webinar e l'interesse per le aree: ${interessiStr}.\n\n- I Miei Contatti:\n• Email: ${formData.email} (Rif: ${emailRiferimento})\n• Telefono: ${formData.telefono}\n\nChiedo l'accesso e la registrazione della presenza.`;
    
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(testo)}`;
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-24 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI RESPONSIVE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE FLUIDO */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-[10px] md:text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest text-stone-600 font-serif truncate max-w-[180px] sm:max-w-none">Tokenizzazione • NetFree</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <a href="/" className="text-stone-600 hover:text-stone-900 transition-colors font-serif whitespace-nowrap">← Home</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-12 md:space-y-20 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide md:tracking-widest shadow-sm font-serif">
            <Coins className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> Architettura Finanziaria e Asset Reali
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Tokenizzazione del Valore
          </h1>
          <p className="text-sm md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Il patrimonio reale non viene venduto né svenduto: viene attivato attraverso la certificazione digitale e la tecnologia blockchain. Scopri le opportunità di partecipazione e gli strumenti ufficiali.
          </p>
        </div>

        {/* SEZIONE VIDEO PRELIMINARE */}
        <div className="p-5 sm:p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-[#141210] border border-stone-800 text-stone-100 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4 relative z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-stone-900 px-3 py-1 rounded border border-stone-800 uppercase">
                Video Preliminare
              </span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-white mt-2">
                Asset e DeFi: Analisi del Protocollo Blotix
              </h3>
            </div>
            <a 
              href="https://www.youtube.com/watch?v=4cuK5woL5eY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors bg-stone-900/80 px-4 py-2 rounded-xl border border-stone-800 w-fit"
            >
              Apri su YouTube <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner relative z-10 flex items-center justify-center">
            <iframe 
              className="w-full h-full absolute inset-0"
              src="https://www.youtube-nocookie.com/embed/4cuK5woL5eY" 
              title="Asset e DeFi - Blotix Protocol" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-2 relative z-10">
            <div className="p-3.5 md:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase">01. RWA & Sicurezza</span>
              <p className="text-xs text-stone-300 font-light font-serif">Piena proprietà e rendita passiva del 2,5%.</p>
            </div>
            <div className="p-3.5 md:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase">02. Doppio Token</span>
              <p className="text-xs text-stone-300 font-light font-serif">Safe Money e Blotz separati chirurgicamente.</p>
            </div>
            <div className="p-3.5 md:p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase">03. Burn Deflazionistico</span>
              <p className="text-xs text-stone-300 font-light font-serif">Scarsità programmata e halving al 5° anno.</p>
            </div>
          </div>
        </div>

        {/* SEZIONE: CHE COSA È TOKENIZZABILE? */}
        <div className="p-6 sm:p-8 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8 md:space-y-10">
          <div className="text-center space-y-2 md:space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Orizzonte degli Asset</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Che cosa è tokenizzabile?</h3>
            <p className="text-stone-600 text-xs md:text-sm font-light font-serif px-2">Qualsiasi forma di valore reale, tangibile o immateriale, può essere certificata e resa liquida attraverso i protocolli digitali Blotix.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 md:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center space-y-2">
              <span className="text-2xl">🐄</span>
              <h4 className="font-serif font-bold text-sm text-stone-900">Mucche & Bestiame</h4>
              <p className="text-xs text-stone-600 font-light">Asset biologici e zootecnici.</p>
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center space-y-2">
              <span className="text-2xl">⚽</span>
              <h4 className="font-serif font-bold text-sm text-stone-900">Calciatori & Prestazioni</h4>
              <p className="text-xs text-stone-600 font-light">Diritti e flussi sportivi.</p>
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center space-y-2">
              <span className="text-2xl">💡</span>
              <h4 className="font-serif font-bold text-sm text-stone-900">Idee & Progetti</h4>
              <p className="text-xs text-stone-600 font-light">Intuizioni in prototipi finanziabili.</p>
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center space-y-2">
              <span className="text-2xl">📜</span>
              <h4 className="font-serif font-bold text-sm text-stone-900">Brevetti & Proprietà</h4>
              <p className="text-xs text-stone-600 font-light">Protezione di innovazioni.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <h4 className="text-xs font-serif uppercase tracking-wider text-stone-500 text-center mb-6">Ambiti Istituzionali di Applicazione (Blotix)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://www.blotix.io/index.php/privati" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-all flex flex-col justify-between group space-y-3">
                <div className="space-y-1">
                  <span className="text-amber-800"><Building2 className="w-5 h-5" /></span>
                  <h5 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">Beni Privati</h5>
                  <p className="text-xs text-stone-500 font-light">Immobili e patrimoni personali.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-serif">Approfondisci <ExternalLink className="w-3 h-3" /></span>
              </a>

              <a href="https://www.blotix.io/index.php/aziende" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-all flex flex-col justify-between group space-y-3">
                <div className="space-y-1">
                  <span className="text-amber-800"><Layers className="w-5 h-5" /></span>
                  <h5 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">Aziende</h5>
                  <p className="text-xs text-stone-500 font-light">Asset aziendali e flussi produttivi.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-serif">Approfondisci <ExternalLink className="w-3 h-3" /></span>
              </a>

              <a href="https://www.blotix.io/index.php/terzo-settore" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-all flex flex-col justify-between group space-y-3">
                <div className="space-y-1">
                  <span className="text-amber-800"><HeartHandshake className="w-5 h-5" /></span>
                  <h5 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">Terzo Settore</h5>
                  <p className="text-xs text-stone-500 font-light">Progetti sociali e comunitari.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-serif">Approfondisci <ExternalLink className="w-3 h-3" /></span>
              </a>

              <a href="https://www.blotix.io/index.php/pubblica-amministrazione" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-all flex flex-col justify-between group space-y-3">
                <div className="space-y-1">
                  <span className="text-amber-800"><Landmark className="w-5 h-5" /></span>
                  <h5 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">Pubblica Amministrazione</h5>
                  <p className="text-xs text-stone-500 font-light">Valorizzazione beni pubblici.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-800 font-serif">Approfondisci <ExternalLink className="w-3 h-3" /></span>
              </a>
            </div>
          </div>
        </div>

        {/* SEZIONE SIMULATORE E CONTRATTI */}
        <div className="p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-amber-50/80 via-white to-stone-50 border border-amber-200 shadow-xl space-y-6 md:space-y-8">
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Strumenti e Documentazione Ufficiale</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Simulatore Tokenomics 2.0 & Contratti</h3>
            <p className="text-stone-600 text-xs md:text-sm font-light font-serif">Accedi al simulatore ufficiale Blotix e scarica la documentazione legale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-2">
            
            <a 
              href="https://www.blotix.io/index.php/tokenomics-2-0-simulatore" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-5 md:p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-400 shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-serif font-bold text-base md:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">Simulatore Tokenomics 2.0</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Testa i flussi e calcola le proiezioni con il simulatore ufficiale interattivo di Blotix.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900 pt-2">
                Apri Simulatore <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            <a 
              href="https://www.blotix.io/images/doc/Contratto_Tokenization_Blotix.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-5 md:p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-400 shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <FileCheck className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-serif font-bold text-base md:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">Contratto di Tokenizzazione</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Scarica il documento ufficiale PDF che disciplina la tokenizzazione degli asset reali.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900 pt-2">
                Scarica PDF Contratto <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            <a 
              href="https://www.blotix.io/images/doc/BLOTIX_NFT_License_Agreement.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-5 md:p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-400 shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-serif font-bold text-base md:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">Contratto di Licenza d'Uso</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Consulta l'accordo ufficiale di licenza d'uso (BLOTIX NFT License Agreement).
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900 pt-2">
                Scarica Licenza PDF <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>
        </div>

        {/* LE POSSIBILITÀ E I PROSPETTI */}
        <div className="space-y-6 md:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Le Possibilità e i Ruoli nell'Ecosistema</h2>
            <p className="text-stone-600 text-xs md:text-sm font-light font-serif">Seleziona il tuo ruolo per attivare il valore e sostenere la crescita circolare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            <div className="p-6 md:p-8 rounded-3xl md:rounded-[2rem] bg-white border border-stone-200/85 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
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

            <div className="p-6 md:p-8 rounded-3xl md:rounded-[2rem] bg-white border border-stone-200/85 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
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

            <div className="p-6 sm:p-8 md:p-8 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-amber-50/60 via-white to-stone-50 border border-amber-200 shadow-xl space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between md:col-span-2">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300 w-fit">Co-Creazione Ecosistema</span>
                  <span className="inline-flex items-center gap-1 text-[11px] md:text-xs text-amber-900 font-serif bg-white px-3 py-1 rounded-full border border-amber-200 shadow-xs w-fit">
                    <Lock className="w-3 h-3 text-amber-700" /> Prospetto riservato su invito
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Liquidity Provider (Partecipazione alla Creazione di Valore)</h3>
                <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
                  Unisciti a chi sceglie di co-creare e sostenere l'avvio dell'ecosistema reale. La messa a disposizione di capitale e volumi serve a coprire i costi iniziali e ad attivare i cantieri operativi territoriali. <em>I dettagli operativi, le fasce di contributo e la documentazione dedicata sono accessibili esclusivamente tramite il link riservato rilasciato dopo la manifestazione d'interesse.</em>
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 font-serif">
                <span>Avvio Cantieri & Volumi</span>
                <span className="text-amber-800 font-semibold">Accesso tramite Modulo sottostante</span>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl md:rounded-[2rem] bg-white border border-stone-200/85 shadow-xl space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between md:col-span-2">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Opzione 04</span>
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

        {/* PIATTAFORME E MASSIMO FUSTINONI */}
        <div className="p-6 sm:p-8 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-stone-900 text-stone-100 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-400 font-serif font-semibold">Piattaforme e Riferimenti</span>
            <h3 className="text-xl md:text-3xl font-serif font-bold">La Tecnologia Blotix e il Fondatore Massimo Fustinoni</h3>
            <p className="text-stone-400 text-xs md:text-sm font-light">Esplora la documentazione ufficiale e gli articoli di approfondimento sulla finanza digitale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2 max-w-2xl mx-auto">
            <a href="https://www.blotix.io" target="_blank" rel="noopener noreferrer" className="p-5 md:p-6 rounded-3xl bg-stone-800/60 border border-stone-700/80 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400">Piattaforma Ufficiale</span>
                <h4 className="font-serif text-base md:text-lg text-stone-100 group-hover:text-amber-300 transition-colors">Blotix.io</h4>
                <p className="text-xs text-stone-400 font-light">Protocolli di tokenizzazione e Real World Assets.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-serif pt-2">Visita blotix.io <ExternalLink className="w-3.5 h-3.5" /></span>
            </a>

            <a href="https://www.blotix.org" target="_blank" rel="noopener noreferrer" className="p-5 md:p-6 rounded-3xl bg-stone-800/60 border border-stone-700/80 hover:border-amber-400 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400">Registrazione Ufficiale</span>
                <h4 className="font-serif text-base md:text-lg text-stone-100 group-hover:text-amber-300 transition-colors">Registrazione per Blotix.org</h4>
                <p className="text-xs text-stone-400 font-light">Accesso e registrazione al portale istituzionale.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-serif pt-2">Registrati su blotix.org <ExternalLink className="w-3.5 h-3.5" /></span>
            </a>
          </div>

          <div className="pt-6 border-t border-stone-800 space-y-4">
            <h4 className="text-xs md:text-sm font-serif font-semibold text-amber-300 uppercase tracking-wider">Articoli e Interviste a Massimo Fustinoni</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs font-serif">
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

        {/* MODULO WEBINAR E MANIFESTAZIONE D'INTERESSE */}
        <div className="p-6 sm:p-8 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Partecipa e Unisciti</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Partecipazione ai Webinar & Manifestazione d'Interesse</h3>
            <p className="text-stone-600 text-xs md:text-sm font-light font-serif">Compila il modulo per segnalare il tuo interesse (puoi selezionare più opzioni).</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="space-y-3 pt-2">
                <label className="text-xs font-serif uppercase tracking-wider text-stone-600 block">Sono interessato a… (Selezione Multipla)</label>
                <div className="grid grid-cols-1 gap-2.5 p-3 md:p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  {opzioniInteresse.map((opzione) => {
                    const isChecked = formData.interessi.includes(opzione);
                    return (
                      <div 
                        key={opzione}
                        onClick={() => handleCheckboxChange(opzione)}
                        className={`flex items-start sm:items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          isChecked ? 'bg-amber-50/80 border-amber-300 text-stone-900' : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5 sm:mt-0" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                        )}
                        <span className="text-xs font-serif font-medium leading-snug">{opzione}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-4 rounded-full text-xs md:text-sm inline-flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
                >
                  Invia Richiesta e Conferma Partecipazione <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-6 md:p-8 rounded-3xl bg-amber-50/80 border border-amber-200 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-lg md:text-xl text-stone-900">Registrazione e Conferma Pronte</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Grazie <strong>{formData.nome}</strong>. I tuoi dati e le tue preferenze sono stati registrati. Clicca sul pulsante per inviare la conferma al numero <strong>3477194486</strong> (Rif: <code>biofinsrls@gmail.com</code>) e sbloccare l'accesso al <strong>Prospetto Riservato</strong>.
                </p>
              </div>
              
              <div className="pt-4 border-t border-amber-200/60 flex flex-col gap-3">
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all font-serif"
                >
                  <MessageCircle className="w-4 h-4" /> Invia Conferma su WhatsApp (3477194486)
                </a>
                <a 
                  href="/prospetto-riservato" 
                  className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-6 py-3 rounded-full text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all font-serif"
                >
                  ✦ Accedi al Prospetto Riservato LP
                </a>
              </div>
            </div>
          )}
        </div>

      </main>

    </div>
  );
}
