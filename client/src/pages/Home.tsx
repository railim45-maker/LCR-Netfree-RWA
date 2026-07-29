import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, ExternalLink, ShieldCheck, Heart, Leaf, Globe, Sun } from 'lucide-react';

export default function Home() {
  const [activeCircle, setActiveCircle] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative text-stone-800 space-y-28 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-600 font-serif">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <a 
              href="/The_Road_to_Sovereignty.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors font-serif cursor-pointer shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Apri il PDF Ufficiale
            </a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-6 space-y-24 relative z-10">
        
        {/* INTRODUZIONE: LA STRADA CHE CONDUCE A CASA */}
        <div className="text-center space-y-6 pt-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> La Via della Libertà e della Cura
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Strada che Conduce a Casa
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif">
            Hai presente quella sensazione di camminare a tentoni, con la costante paura di sbagliare strada, mentre il peso delle bollette, del lavoro e delle preoccupazioni sembra schiacciarti ogni giorno di più? Ti hanno fatto credere che la vita sia una lotta solitaria e che non ci sia via d'uscita. <br /><br />
            <strong className="text-stone-900 font-medium">Non è così.</strong> Quella che hai trovato adesso non è una semplice sosta: è la strada. È la via d'uscita da un sistema che ti vuole esausto, e conduce esattamente là dove meriti di arrivare.
          </p>
        </div>

        {/* I 4 PILASTRI / LE TAPPE */}
        <div className="space-y-8">
          
          {/* Tappa I */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">I</span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Primo Passo: Mettere i Piedi a Terra</h3>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Il primo blocco, quando si è stanchi, è la paura di non potersi permettere un cambiamento o di dover rischiare soldi che servono per la spesa. La strada non ti chiede alcun capitale iniziale. Grazie a un meccanismo basato sulla tokenizzazione e sul sostegno di chi ha creduto prima di te nel progetto — con la generosità di chi ha fatto un passo indietro sulle prime semestralità — il tuo ingresso nel sistema è protetto. Non parti con un esborso economico: parti in equilibrio.
            </p>
          </div>

          {/* Tappa II */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">II</span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Secondo Passo: Camminare Insieme (Il Net-Free)</h3>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Una volta alleggerito il passo dalla pressione finanziaria, impariamo a muoverci in modo nuovo. Dimentica il mondo là fuori fatto di competizione e solitudine. Qui ti affidiamo un seme pulito. La regola è semplice e profondamente umana: ti prendi cura del tuo spazio e aiuti sei persone a fare lo stesso. È una catena di cura e di abbondanza condivisa, dove la forza di uno sostiene la crescita di tutti, slegando finalmente il guadagno dal tempo che vendi ogni giorno.
            </p>
          </div>

          {/* Tappa III */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">III</span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Terzo Passo: Ritrovare il Tempio Biologico</h3>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando l'economia smette di essere un assillo costante, l'energia torna a concentrarsi dove serve davvero: nel tuo corpo. La strada ti guida a riscoprire i gesti semplici e veri che restituiscono vitalità alla materia: un'acqua pura che disseta davvero, la terra che si rigenera attraverso i microrganismi e la sovranità energetica che alleggerisce la tua casa. Quando il corpo si ripulisce e ritrova il suo equilibrio naturale, la nebbia svanisce.
            </p>
          </div>

          {/* Tappa IV */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">IV</span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Quarto Passo: La Piena Sovranità (L'Accademia)</h3>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando avrai ritrovato le tue forze, quando la tua vita avrà ripreso respiro e stabilità, allora sarai pronto per la tappa più profonda del risveglio: l'Accademia Uomo Naturale. È qui che impari a comprendere la finzione giuridica, a sciogliere le vecchie catene e a riprendere in mano la firma e la guida autentica della tua esistenza, con la consapevolezza di chi sa chi è veramente.
            </p>
          </div>

        </div>

        {/* SEZIONE INTERATTIVA: I CERCHI DEL NET-FREE */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-stone-900 text-stone-100 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-400 font-serif font-semibold">Economia del Dono • Rete Net-Free</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold">La Costellazione dei Cerchi Illuminati</h3>
            <p className="text-stone-400 text-sm font-light">Clicca su ciascuna fase per attivare l'illuminazione e scoprire come la cura circolare genera abbondanza collettiva.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <div 
              onClick={() => setActiveCircle(activeCircle === 1 ? null : 1)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${activeCircle === 1 ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'bg-stone-800/60 border-stone-700/80 hover:border-stone-500'}`}
            >
              <div className="space-y-3">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${activeCircle === 1 ? 'bg-amber-400 text-stone-950 shadow-md' : 'bg-stone-700 text-stone-300'}`}>01</span>
                <h4 className="font-serif text-lg text-amber-300 font-semibold">Il Seme Ricevuto</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Tutto ha inizio da un seme pulito ricevuto in dono. Nessun debito, nessuna pressione finanziaria iniziale, solo l'opportunità di fiorire.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs text-amber-400 font-serif">
                <span>{activeCircle === 1 ? "Cerchio Attivo ✦" : "Clicca per accendere"}</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div 
              onClick={() => setActiveCircle(activeCircle === 2 ? null : 2)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${activeCircle === 2 ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'bg-stone-800/60 border-stone-700/80 hover:border-stone-500'}`}
            >
              <div className="space-y-3">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${activeCircle === 2 ? 'bg-amber-400 text-stone-950 shadow-md' : 'bg-stone-700 text-stone-300'}`}>02</span>
                <h4 className="font-serif text-lg text-amber-300 font-semibold">La Cura della Cerchia</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Non vendi prodotti. Ti prendi cura del tuo spazio e accompagni amorevolmente sei persone in questo percorso di risveglio.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs text-amber-400 font-serif">
                <span>{activeCircle === 2 ? "Cerchio Attivo ✦" : "Clicca per accendere"}</span>
                <Heart className="w-4 h-4" />
              </div>
            </div>

            <div 
              onClick={() => setActiveCircle(activeCircle === 3 ? null : 3)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${activeCircle === 3 ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'bg-stone-800/60 border-stone-700/80 hover:border-stone-500'}`}
            >
              <div className="space-y-3">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${activeCircle === 3 ? 'bg-amber-400 text-stone-950 shadow-md' : 'bg-stone-700 text-stone-300'}`}>03</span>
                <h4 className="font-serif text-lg text-amber-300 font-semibold">L'Abbondanza Circolare</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Quando il seme genera frutti, una parte torna al sistema per alimentare nuovi doni, creando una prosperità collettiva duratura.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs text-amber-400 font-serif">
                <span>{activeCircle === 3 ? "Cerchio Attivo ✦" : "Clicca per accendere"}</span>
                <Sun className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

        {/* COLLEGAMENTI E MATERIALI ESTERNI */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif font-bold text-stone-900">I Presidi e le Fonti Esterne</h3>
            <p className="text-stone-600 text-sm font-light">Approfondisci i partner ufficiali e i pilastri scientifici che sostengono il Tempio Biologico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900">Accademia Uomo Naturale</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Il percorso ufficiale guidato da Aldo Piromalli per comprendere la finzione giuridica e recuperare la piena sovranità.
                </p>
              </div>
              <a 
                href="https://www.accademiauomonaturale.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900 hover:text-amber-950 pt-2"
              >
                Visita Accademia <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900">Presidio Acqua Pura</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Le ricerche e i protocolli del Dott. Roberto Favata per restituire all'acqua la sua originaria memoria e vitalità biologica.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-stone-500 pt-2">
                Protocollo Ufficiale Net-Free
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900">Portale Net-Free LCR</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Il canale ufficiale della community per rimanere aggiornati sui semi digitali e sui momenti di incontro collettivo.
                </p>
              </div>
              <a 
                href="https://netfreelcr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900 hover:text-amber-950 pt-2"
              >
                Vai al Portale Ufficiale <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* CONCLUSIONE E CALL TO ACTION */}
        <div className="p-12 rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 space-y-6 text-center shadow-xl backdrop-blur-md">
          <h3 className="text-2xl font-bold font-serif text-stone-900">Sei pronto a fare il primo passo?</h3>
          <p className="text-base text-stone-600 max-w-xl mx-auto font-light leading-relaxed font-serif italic">
            "Non sei più solo a brancolare nel buio. C'è una mappa, c'è un metodo d'amore e ci sono persone pronte a camminare al tuo fianco."
          </p>
          <div className="pt-3">
            <a 
              href="/The_Road_to_Sovereignty.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-9 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
            >
              <BookOpen className="w-4 h-4 text-amber-400" /> Sfoglia il PDF Ufficiale <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>

    </div>
  );
}
