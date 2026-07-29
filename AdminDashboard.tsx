import React, { useState } from 'react';
import { Sparkles, Users, MessageCircle, BarChart3, Bot, Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  // Stato per la gestione dei tab della dashboard
  const [activeTab, setActiveTab] = useState<'kpi' | 'candidati' | 'oracolo'>('candidati');

  // Dati di esempio per i candidati e le conferme webinar
  const [candidati, setCandidati] = useState([
    { id: 1, nome: "Dario Colognese", email: "dario@esempio.it", telefono: "3477194486", interesse: "Liquidity Provider", confermato: true },
    { id: 2, nome: "Paolo Medeghini", email: "paolo@esempio.it", telefono: "3331122334", interesse: "Proprietario con 0,75%", confermato: false },
    { id: 3, nome: "Costanza Dilillo", email: "costanza@esempio.it", telefono: "3384455667", interesse: "Informatori", confermato: true },
  ]);

  // Stato per la chat dell'Oracolo (Gemini + NotebookLM style)
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Salve, sono l\'Oracolo dell\'Ecosistema NetFree & LCR. Interrogo i documenti interni e la conoscenza globale per assisterti su tokenizzazione, tempio biologico ed economia del dono. Come posso aiutarti?' }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  // Funzione per generare il link WhatsApp del promemoria per il singolo candidato
  const getMessaggioPromemoriaLink = (nome: string, telefono: string) => {
    const testo = `Ciao ${nome},\n\nTi scrivo da Biofin per ricordarti il nostro appuntamento per il webinar.\n\nHo visto che non hai ancora completato la conferma ufficiale o l'accesso al gruppo delle comunicazioni. Ti lascio qui il riferimento diretto:\n\nFammi sapere se hai bisogno di supporto o chiarimenti.\n\nA presto,\nDario - Biofin Srls`;
    const numeroPulito = telefono.replace(/\D/g, '');
    return `https://wa.me/${numeroPulito}?text=${encodeURIComponent(testo)}`;
  };

  // Gestione invio messaggi all'Oracolo
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsThinking(true);

    setTimeout(() => {
      let botResponse = "Ho analizzato la richiesta alla luce dei protocolli di NetFree e dell'economia del dono. ";
      const query = userMsg.toLowerCase();

      if (query.includes('token') || query.includes('blotix') || query.includes('rwa')) {
        botResponse += "Per quanto riguarda la tokenizzazione RWA e il protocollo Blotix, il modello prevede la separazione tra Safe Money e Blotz, garantendo una rendita passiva sostenuta da asset reali.";
      } else if (query.includes('acqua') || query.includes('favata') || query.includes('salute')) {
        botResponse += "Nel Tempio Biologico, l'acqua strutturata e i domini di coerenza esagonali costituiscono il pilastro fondamentale della nutrizione cellulare e della pulizia profonda, come indicato dal Dott. Roberto Favata.";
      } else if (query.includes('legale') || query.includes('oam') || query.includes('compliance')) {
        botResponse += "La compliance richiede attenzione rigorosa: i Club Deal e le strutture di Private Placement devono essere blindate contrattualmente per operare nella massima sicurezza e trasparenza.";
      } else {
        botResponse += `Questo aspetto si collega perfettamente alla visione gilanica e alla 'Potenza del 6': ogni nodo genera valore reale e condiviso all'interno della cerchia di cura.`;
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsThinking(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-12 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DASHBOARD */}
      <header className="container max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-3xl bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-900 flex items-center justify-center font-serif font-bold text-xs border border-amber-200">✦</span>
            <div>
              <h1 className="font-serif font-bold text-sm text-stone-900">Dashboard Amministrativa</h1>
              <p className="text-[11px] text-stone-500 font-serif">Controllo flussi, conferme webinar & Oracolo di Progetto</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-2xl border border-stone-200 text-xs font-serif">
            <button 
              onClick={() => setActiveTab('candidati')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'candidati' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              👥 Candidati & WhatsApp
            </button>
            <button 
              onClick={() => setActiveTab('kpi')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'kpi' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              📊 KPI & Movimenti
            </button>
            <button 
              onClick={() => setActiveTab('oracolo')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'oracolo' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              🤖 Oracolo (AI)
            </button>
          </div>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE TAB */}
      <main className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-8">
        
        {/* TAB 1: GESTIONE CANDIDATI & WHATSAPP */}
        {activeTab === 'candidati' && (
          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Gestione Conferme Webinar & Contatti</h3>
                  <p className="text-xs text-stone-600 font-serif">Visualizza chi ha confermato e invia il promemoria rapido al 3477194486 via WhatsApp.</p>
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full text-xs font-mono font-semibold">
                  Totale Iscritti: {candidati.length}
                </span>
              </div>

              <div className="space-y-3">
                {candidati.map((cand) => (
                  <div key={cand.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#fcfbf9] border border-stone-200/80 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-stone-900 font-serif">{cand.nome}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-stone-200 text-stone-700 rounded">
                          {cand.interesse}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 font-mono">Email: {cand.email} • Tel: {cand.telefono}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full whitespace-nowrap ${cand.confermato ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {cand.confermato ? "Confermato ✓" : "In attesa ⏳"}
                      </span>

                      {!cand.confermato && (
                        <a 
                          href={getMessaggioPromemoriaLink(cand.nome, cand.telefono)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 text-xs font-serif shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> Invia Promemoria WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KPI & MOVIMENTI DEL SITO */}
        {activeTab === 'kpi' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Visite Totali (Mese)</span>
                <h4 className="text-3xl font-bold font-serif text-stone-900">1.482</h4>
                <p className="text-[11px] text-emerald-600 font-serif">↑ +24% rispetto al mese scorso</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Moduli Inviati (Webinar)</span>
                <h4 className="text-3xl font-bold font-serif text-stone-900">128</h4>
                <p className="text-[11px] text-amber-700 font-serif">Tasso di conversione: 8.6%</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Interesse Principale</span>
                <h4 className="text-lg font-bold font-serif text-stone-900">Liquidity Provider</h4>
                <p className="text-[11px] text-stone-500 font-serif">42% delle preferenze totali</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Stato Sistema</span>
                <h4 className="text-lg font-bold font-serif text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Attivo & Blindato
                </h4>
                <p className="text-[11px] text-stone-500 font-serif">Sync WhatsApp: 3477194486</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-900">Analisi Dinamiche & Consigli d'Implementazione</h3>
              <ul className="space-y-3 text-xs md:text-sm text-stone-600 font-light font-serif leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">▪</span>
                  <span><strong>Ottimizzazione Mobile:</strong> L'82% degli accessi avviene da smartphone; le tabelle e i pulsanti WhatsApp rispondono perfettamente agli standard fluidi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold">▪</span>
                  <span><strong>Aree di Sviluppo Consigliate:</strong> Implementare una sezione FAQ interattiva sui contratti di tokenizzazione per ridurre il tasso di rimbalzo sulla pagina dei Club Deal.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: L'ORACOLO (GEMINI + NOTEBOOKLM) */}
        {activeTab === 'oracolo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* PANNELLO INFO */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-stone-900 text-stone-100 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-stone-800 px-3 py-1 rounded border border-stone-700">
                  Intelligenza di Progetto
                </span>
                <h3 className="text-xl font-serif font-bold text-white">L'Oracolo & NotebookLM</h3>
                <p className="text-xs text-stone-300 font-light font-serif leading-relaxed">
                  Questo assistente integra i contenuti interni dell'ecosistema NetFree (Libro Mastro, Protocollo Railim Blotix, Tempio Biologico) con capacità di ricerca esterna per approfondire qualsiasi tematica avanzata.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-2 text-xs font-serif text-stone-300">
                <span className="font-bold text-amber-300 block">Domande frequenti suggerite:</span>
                <p>• Come si struttura il Club Deal?</p>
                <p>• Quali sono i benefici dell'acqua alcalina del Dott. Favata?</p>
                <p>• Spiega l'economia del dono vs economia lineare.</p>
              </div>
            </div>

            {/* INTERFACCIA CHAT */}
            <div className="lg:col-span-8 p-6 rounded-3xl bg-white border border-stone-200 shadow-xl flex flex-col justify-between h-[520px]">
              
              {/* MESSAGGI */}
              <div className="overflow-y-auto space-y-4 pr-2 flex-1">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-serif leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-stone-900 text-stone-100 rounded-br-none' 
                        : 'bg-amber-50/80 border border-amber-200 text-stone-800 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex justify-start">
                    <div className="p-4 rounded-2xl bg-stone-100 text-stone-500 text-xs font-serif italic animate-pulse">
                      L'Oracolo sta consultando i registri e interrogando il campo...
                    </div>
                  </div>
                )}
              </div>

              {/* INPUT FORM */}
              <form onSubmit={handleSendMessage} className="pt-4 border-t border-stone-100 flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Fai una domanda sul progetto o chiedi un approfondimento esterno..." 
                  className="flex-1 px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:border-amber-500 font-serif"
                />
                <button 
                  type="submit"
                  className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-2xl transition-all inline-flex items-center justify-center font-serif text-xs cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}
