import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Minimize2 } from 'lucide-react';

export default function FloatingOracolo() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Salve! Sono l\'Oracolo dell\'Ecosistema NetFree & LCR. Sono direttamente collegato al motore neurale Gemini per assisterti su tokenizzazione, autodeterminazione ed economia del dono. Come posso aiutarti?' }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsThinking(true);

    try {
      /* 
        CONFIGURAZIONE CHIAMATA GEMINI API:
        Inserisci la tua chiave API di Google Gemini oppure collega questa fetch 
        al tuo endpoint backend sicuro per non esporre la chiave nel browser.
      */
      const GEMINI_API_KEY = "INSERISCI_QUI_LA_TUA_GEMINI_API_KEY"; // Oppure process.env.VITE_GEMINI_API_KEY
      
      // Se stai usando un backend locale o un proxy sicuro, puoi puntare direttamente al tuo server, 
      // oppure chiamare direttamente l'endpoint ufficiale di Google Generative Language:
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Sei l'Oracolo ufficiale dell'ecosistema LCR-NetFree, un assistente esperto in tokenizzazione RWA (Protocollo Blotix), economia del dono, tempio biologico (acqua strutturata, Dott. Favata), e manuali di autodeterminazione e legge naturale. Rispondi in modo approfondito, coerente e allineato a questi principi alla seguente domanda dell'utente: "${userMsg}"`
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Errore di connessione con il motore Gemini.");
      }

      const data = await response.json();
      const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "L'Oracolo ha elaborato la risposta ma non ha restituito testo.";

      setChatMessages(prev => [...prev, { sender: 'bot', text: geminiReply }]);
    } catch (error) {
      console.error("Errore Oracolo Gemini:", error);
      
      // Fallback intelligente in caso di chiave API non ancora inserita o errore di rete
      setChatMessages(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: `Ho ricevuto la tua richiesta su "${userMsg}". (Nota: Per attivare le risposte in tempo reale tramite Gemini, inserisci la tua API Key nel codice del widget). L'ecosistema NetFree e l'economia del dono restano comunque orientati alla massima trasparenza e coerenza collettiva.` 
        }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-serif">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 hover:bg-stone-800 text-stone-50 p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105 cursor-pointer border border-stone-700"
          title="Apri l'Oracolo AI"
        >
          <Bot className="w-5 h-5 text-amber-400 animate-pulse" />
          <span className="text-xs font-semibold pr-1 hidden sm:inline">Oracolo AI</span>
        </button>
      ) : (
        <div className="w-[340px] sm:w-[390px] h-[520px] bg-white border border-stone-200 shadow-2xl rounded-3xl flex flex-col justify-between overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* HEADER DELLA CHAT */}
          <div className="bg-stone-900 text-stone-100 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="font-bold text-xs uppercase tracking-wider">Oracolo • powered by Gemini</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer p-1"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* MESSAGGI */}
          <div className="overflow-y-auto p-4 space-y-3 flex-1 bg-[#fcfbf9]">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-stone-900 text-stone-100 rounded-br-none' 
                    : 'bg-amber-50/90 border border-amber-200 text-stone-800 rounded-bl-none shadow-xs'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl bg-stone-100 text-stone-500 text-xs italic animate-pulse">
                  Gemini sta interrogando i registri e i documenti...
                </div>
              </div>
            )}
          </div>

          {/* INPUT FORM */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Chiedi qualsiasi cosa all'Oracolo..." 
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
            />
            <button 
              type="submit"
              className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2.5 rounded-xl transition-all inline-flex items-center justify-center text-xs cursor-pointer shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
