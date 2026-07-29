import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Leaf, Globe, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
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
            <Link 
              href="/tokenizzazione"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors font-serif font-semibold shadow-sm"
            >
              ✦ Esplora la Tokenizzazione
            </Link>
            <a 
              href="https://youtu.be/bhG1fel_lq4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors font-serif cursor-pointer shadow-sm"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Guarda il Video
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

        {/* VIDEO DI SPIEGAZIONE INCORCORPORATO */}
        <div className="p-4 md:p-6 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-2xl space-y-4">
          <div className="text-center space-y-2 pb-2">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Verso l'Abbondanza Condivisa</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Il Video di Presentazione della Via</h3>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-950">
            <iframe
              src="https://www.youtube.com/embed/bhG1fel_lq4"
              title="Verso l'Abbondanza Condivisa - Presentazione Ufficiale"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center pt-2">
            <p className="text-xs text-stone-500 font-serif italic">
              "Il punto non è arricchirsi isolandosi dagli altri, ma capire il potenziale pazzesco della cura collettiva."
            </p>
          </div>
        </div>

        {/* LE 4 TAPPE / I PILASTRI */}
        <div className="space-y-8">
          
          {/* Tappa I (Collegata direttamente alla pagina Tokenizzazione) */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">I</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Primo Passo: Mettere i Piedi a Terra</h3>
              </div>
              <Link 
                href="/tokenizzazione" 
                className="text-xs font-serif text-amber-900 hover:text-amber-950 inline-flex items-center gap-1.5 font-semibold bg-amber-50 px-4 py-2 rounded-full border border-amber-200 transition-all hover:shadow-sm"
              >
                Esplora la Tokenizzazione & le 6 Opzioni <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Il primo blocco, quando si è stanchi, è la paura di non potersi permettere un cambiamento o di dover rischiare soldi che servono per la spesa. La strada non ti chiede alcun capitale iniziale. Grazie a un meccanismo basato sulla tokenizzazione e sul sostegno di chi ha creduto prima di te nel progetto, il tuo ingresso nel sistema è protetto. Non parti con un esborso economico: parti in equilibrio.
            </p>
          </div>

          {/* Tappa II */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">II</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Secondo Passo: Camminare Insieme (Il Net-Free)</h3>
              </div>
              <Link href="/economia-dono" className="text-xs font-serif text-amber-900 hover:underline inline-flex items-center gap-1 font-semibold">
                Economia del Dono <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Una volta alleggerito il passo dalla pressione finanziaria, impariamo a muoverci in modo nuovo. Dimentica il mondo là fuori fatto di competizione e solitudine. Qui ti affidiamo un seme pulito. La regola è semplice e profondamente umana: ti prendi cura del tuo spazio e aiuti sei persone a fare lo stesso. È una catena di cura e di abbondanza condivisa.
            </p>
          </div>

          {/* Tappa III */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">III</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Terzo Passo: Ritrovare il Tempio Biologico</h3>
              </div>
              <span className="text-xs font-serif text-stone-500 font-medium">Presidi Ufficiali</span>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando l'economia smette di essere un assillo costante, l'energia torna a concentrarsi dove serve davvero: nel tuo corpo. La strada ti guida a riscoprire i gesti semplici e veri che restituiscono vitalità alla materia: un'acqua pura che disseta davvero, la terra che si rigenera e la sovranità energetica che alleggerisce la tua casa.
            </p>
          </div>

          {/* Tappa IV */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">IV</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Quarto Passo: La Piena Sovranità (L'Accademia)</h3>
              </div>
              <Link href="/liberta-legale" className="text-xs font-serif text-amber-900 hover:underline inline-flex items-center gap-1 font-semibold">
                Accademia Uomo Naturale <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando avrai ritrovato le tue forze, quando la tua vita avrà ripreso respiro e stabilità, allora sarai pronto per la tappa più profonda del risveglio: l'Accademia Uomo Naturale. È qui che impari a comprendere la finzione giuridica, a sciogliere le vecchie catene e a riprendere in mano la guida autentica della tua esistenza.
            </p>
          </div>

        </div>

        {/* SEZIONE: IL MODELLO DI SVILUPPO (ECONOMIA DEL DONO) */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Il Modello di Sviluppo</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Dalla Vendita alla Cura del Giardino</h3>
            <p className="text-stone-600 text-sm font-light font-serif">Il passaggio strutturale dal vecchio sistema piramidale basato su reclutamento e pressione al Sistema Net-Free fondato sulla comunità e sull'abbondanza circolare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">Vecchio Sistema</span>
              <h4 className="font-serif font-bold text-xl text-stone-900">Reclutamento, Pressione, Scarsità</h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Una struttura basata sulla competizione solitaria e sulla vendita forzata, dove la fatica aumenta e la libertà si allontana costantemente.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-200/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">Sistema Net-Free</span>
              <h4 className="font-serif font-bold text-xl text-stone-900">Comunità, Dono, Cura, Abbondanza</h4>
              <p className="text-sm text-stone-700 font-light leading-relaxed">
                Non ti chiediamo di diventare un venditore. Ti chiediamo di prenderti cura della tua cerchia, accompagnando chi scegli nel percorso di crescita.
              </p>
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
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link 
              href="/tokenizzazione"
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium px-8 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-md transition-all font-serif border border-amber-300"
            >
              ✦ Scopri le 6 Opzioni di Tokenizzazione
            </Link>
            <a 
              href="https://youtu.be/bhG1fel_lq4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" /> Guarda il Video di Spiegazione <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>

    </div>
  );
}
