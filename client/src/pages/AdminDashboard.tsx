import React, { useState } from 'react';
import { Sparkles, Users, MessageCircle, BarChart3, Bot, Send, CheckCircle2, ShieldCheck, Upload, FileText, Video, Plus, Trash2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'candidati' | 'contenuti' | 'kpi' | 'oracolo'>('contenuti');

  // Stato per la gestione dei candidati e webinar (WhatsApp 3477194486)
  const [candidati, setCandidati] = useState([
    { id: 1, nome: "Dario Colognese", email: "dario@esempio.it", telefono: "3477194486", interesse: "Liquidity Provider", confermato: true },
    { id: 2, nome: "Paolo Medeghini", email: "paolo@esempio.it", telefono: "3331122334", interesse: "Proprietario con 0,75%", confermato: false },
    { id: 3, nome: "Costanza Dilillo", email: "costanza@esempio.it", telefono: "3384455667", interesse: "Informatori", confermato: true },
  ]);

  // Stato per la gestione dei contenuti riservati (Autodeterminazione e Video Incontri)
  const [documentiRiservati, setDocumentiRiservati] = useState([
    { id: 1, titolo: "Manuale di Autodeterminazione e Legge Naturale", tipo: "PDF Riservato", data: "2026-06-12", url: "#" },
    { id: 2, titolo: "Registrazione Incontro Chiuso n. 4 - Protocolli OAM", tipo: "Video Incontro", data: "2026-06-20", url: "https://youtube.com/..." },
  ]);

  const [nuovoTitolo, setNuovoTitolo] = useState('');
  const [nuovoTipo, setNuovoTipo] = useState('PDF Riservato');
  const [nuovoUrl, setNuovoUrl] = useState('');

  const handleAggiungiContenuto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuovoTitolo || !nuovoUrl) return;

    const nuovoItem = {
      id: Date.now(),
      titolo: nuovoTitolo,
      tipo: nuovoTipo,
      data: new Date().toISOString().split('T')[0],
      url: nuovoUrl
    };

    setDocumentiRiservati(prev => [nuovoItem, ...prev]);
    setNuovoTitolo('');
    setNuovoUrl('');
  };

  const handleEliminaContenuto = (id: number) => {
    setDocumentiRiservati(prev => prev.filter(item => item.id !== id));
  };

  // Funzione WhatsApp per i candidati
  const getMessaggioPromemoriaLink = (nome: string, telefono: string) => {
    const testo = `Ciao ${nome},\n\nTi scrivo da Biofin per ricordarti l'appuntamento webinar e l'accesso ai documenti riservati sull'autodeterminazione.\n\nFammi sapere se hai bisogno di supporto.\n\nA presto,\nDario - Biofin Srls`;
    const numeroPulito = telefono.replace(/\D/g, '');
    return `https://wa.me/${numeroPulito}?text=${encodeURIComponent(testo)}`;
  };

  // Stato Oracolo AI (Gemini + NotebookLM)
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Salve Admin Dario. Sono l\'Oracolo collegato a tutta la documentazione dell\'ecosistema, inclusi i registri di autodeterminazione e i video degli incontri. Come posso assisterti nella gestione o nell\'analisi?' }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsThinking(true);

    setTimeout(() => {
      let botResponse = "Analisi completata sui registri interni e sui protocolli di autodeterminazione. ";
      const query = userMsg.toLowerCase();

      if (query.includes('autodeterminazione') || query.includes('legge') || query.includes('sovranità')) {
        botResponse += "La documentazione sull'autodeterminazione stabilisce il principio di non-aggressione e l'uscita dalla finzione giuridica attraverso l'Aletheiaforo.";
      } else if (query.includes('video') || query.includes('incontro')) {
        botResponse += "Ho indicizzato tutti i video degli incontri passati. Puoi consultarli e caricarne di nuovi direttamente dal pannello 'Gestione Contenuti'.";
      } else {
        botResponse += "Tutti i moduli, i flussi WhatsApp (3477194486) e i dati di traffico sono operativi e sincronizzati.";
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-6 py-4 rounded-3xl bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-8 h-8 rounded-full bg-amber-50 text-amber-900 flex items-center justify-center font-serif font-bold text-xs border border-amber-200 hover:bg-amber-100 transition-colors" title="Torna alla Home">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-sm text-stone-900">Dashboard Admin • Accesso Totale</h1>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono rounded-full font-bold">LIVE</span>
              </div>
              <p className="text-[11px] text-stone-500 font-serif">Gestione Contenuti, Autodeterminazione, Webinar & Oracolo AI</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-1 rounded-2xl border border-stone-200 text-xs font-serif">
            <button 
              onClick={() => setActiveTab('contenuti')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'contenuti' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              📁 Contenuti & Autodeterminazione
            </button>
            <button 
              onClick={() => setActiveTab('candidati')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'candidati' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              👥 Candidati & WhatsApp
            </button>
            <button 
              onClick={() => setActiveTab('kpi')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'kpi' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              📊 KPI & Movimenti
            </button>
            <button 
              onClick={() => setActiveTab('oracolo')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'oracolo' ? 'bg-white shadow-sm font-bold text-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
              🤖 Oracolo (NotebookLM)
            </button>
          </div>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 space-y-8">
        
        {/* TAB 1: GESTIONE CONTENUTI & AUTODETERMINAZIONE */}
        {activeTab === 'contenuti' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* FORM DI CARICAMENTO */}
            <div className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
              <div className="space-y-2 border-b border-stone-100 pb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Caricamento Sicuro
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900">Aggiungi Materiale Riservato</h3>
                <p className="text-xs text-stone-600 font-serif">Carica guide sull'autodeterminazione o link ai video degli incontri protetti.</p>
              </div>

              <form onSubmit={handleAggiungiContenuto} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">Titolo Contenuto</label>
                  <input 
                    type="text" 
                    required
                    value={nuovoTitolo}
                    onChange={(e) => setNuovoTitolo(e.target.value)}
                    placeholder="Es. Modulo di Notifica Sovrana" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 font-serif focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">Tipologia</label>
                  <select 
                    value={nuovoTipo}
                    onChange={(e) => setNuovoTipo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 font-serif focus:outline-none focus:border-amber-500"
                  >
                    <option value="PDF Riservato">PDF Autodeterminazione</option>
                    <option value="Video Incontro">Video Incontro Chiuso</option>
                    <option value="Documento Legale">Documento Legale / OAM</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-serif uppercase tracking-wider text-stone-600">URL / Link di Accesso</label>
                  <input 
                    type="url" 
                    required
                    value={nuovoUrl}
                    onChange={(e) => setNuovoUrl(e.target.value)}
                    placeholder="https://..." 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 font-serif focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium py-3.5 rounded-full text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all font-serif cursor-pointer"
                >
                  <Upload className="w-4 h-4 text-amber-400" /> Pubblica Contenuto Riservato
                </button>
              </form>
            </div>

            {/* LISTA DOCUMENTI CARICATI */}
            <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
              <div className="space-y-2 border-b border-stone-100 pb-4">
                <h3 className="text-xl font-serif font-bold text-stone-900">Archivio Autodeterminazione & Video</h3>
                <p className="text-xs text-stone-600 font-serif">Contenuti protetti indicizzati nell'Oracolo AI.</p>
              </div>

              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {documentiRiservati.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#fcfbf9] border border-stone-200/80 gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0 mt-0.5">
                        {doc.tipo.includes('Video') ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-stone-900 font-serif">{doc.titolo}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500">
                          <span className="px-2 py-0.5 bg-stone-200 rounded text-stone-700">{doc.tipo}</span>
                          <span>Caricato il: {doc.data}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all"
                        title="Apri link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => handleEliminaContenuto(doc.id)}
                        className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-all cursor-pointer"
                        title="Elimina"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CANDIDATI & WHATSAPP */}
        {activeTab === 'candidati' && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">Gestione Conferme Webinar & Contatti</h3>
                <p className="text-xs text-stone-600 font-serif">Invia promemoria istantanei via WhatsApp al numero <strong>3477194486</strong>.</p>
              </div>
              <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full text-xs font-mono font-semibold w-fit">
                Iscritti Registrati: {candidati.length}
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
                        <MessageCircle className="w-3.5 h-3.5" /> Promemoria WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: KPI & MOVIMENTI */}
        {activeTab === 'kpi' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Visite Totali (Mese)</span>
                <h4 className="text-3xl font-bold font-serif text-stone-900">1.640</h4>
                <p className="text-[11px] text-emerald-600 font-serif">↑ +28% traffico attivo</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Moduli Inviati</span>
                <h4 className="text-3xl font-bold font-serif text-stone-900">142</h4>
                <p className="text-[11px] text-amber-700 font-serif">Conversione webinar: 9.1%</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Documenti Riservati</span>
                <h4 className="text-3xl font-bold font-serif text-stone-900">{documentiRiservati.length}</h4>
                <p className="text-[11px] text-stone-500 font-serif">Autodeterminazione & Video</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-2">
                <span className="text-xs font-mono uppercase text-stone-500">Stato Admin</span>
                <h4 className="text-lg font-bold font-serif text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Sbloccato
                </h4>
                <p className="text-[11px] text-stone-500 font-serif">Accesso totale garantito</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: L'ORACOLO (GEMINI + NOTEBOOKLM) */}
        {activeTab === 'oracolo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            <div className="lg:col-span-4 p-6 rounded-3xl bg-stone-900 text-stone-100 shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-stone-800 px-3 py-1 rounded border border-stone-700">
                  Intelligenza Multi-Documento
                </span>
                <h3 className="text-xl font-serif font-bold text-white">L'Oracolo & NotebookLM</h3>
                <p className="text-xs text-stone-300 font-light font-serif leading-relaxed">
                  Interroga in tempo reale tutti i documenti caricati, i manuali di autodeterminazione e le registrazioni video per estrarre risposte e coordinare gli appuntamenti.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-2 text-xs font-serif text-stone-300">
                <span className="font-bold text-amber-300 block">Richieste rapide:</span>
                <p>• Riassumi il manuale di autodeterminazione</p>
                <p>• Quali video sono stati caricati di recente?</p>
                <p>• Prepara un promemoria per i candidati in attesa</p>
              </div>
            </div>

            <div className="lg:col-span-8 p-6 rounded-3xl bg-white border border-stone-200 shadow-xl flex flex-col justify-between h-[520px]">
              
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
                      L'Oracolo sta analizzando l'archivio e interrogando i registri...
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="pt-4 border-t border-stone-100 flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Fai una domanda sui documenti di autodeterminazione o sui video..." 
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
