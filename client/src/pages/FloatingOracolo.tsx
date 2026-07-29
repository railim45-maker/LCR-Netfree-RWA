import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Minimize2 } from 'lucide-react';

export default function FloatingOracolo() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Salve! Sono l\'Oracolo dell\'Ecosistema NetFree & LCR. Come posso aiutarti oggi?' }
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
      let botResponse = "Ho esaminato la richiesta alla luce dei protocolli dell'ecosistema. ";
      const query = userMsg.toLowerCase();

      if (query.includes('token') || query.includes('blotix')) {
        botResponse += "La tokenizzazione RWA con Blotix attiva i beni reali garantendo una rendita sostenibile del 2,5%.";
      } else if (query.includes('acqua') || query.includes('favata')) {
        botResponse += "L'acqua strutturata del Tempio Biologico ripristina i domini di coerenza esagonali per la salute cellulare.";
      } else {
        botResponse += "Questo aspetto rientra nei principi dell'economia del dono e della crescita condivisa.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsThinking(false);
    }, 1000);
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
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white border border-stone-200 shadow-2xl rounded-3xl flex flex-col justify-between overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* HEADER DELLA CHAT */}
          <div className="bg-stone-900 text-stone-100 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="font-bold text-xs uppercase tracking-wider">Oracolo • NetFree & LCR</h3>
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
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
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
                  L'Oracolo sta consultando i registri...
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
              placeholder="Fai una domanda..." 
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
