import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export default function OracoloWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Benvenuto nel campo. Sono il tuo coach strategico e assistente per l'ecosistema Net-Free e LCR. Come posso aiutarti a chiarire un passaggio, collegare i moduli o sviluppare il tuo progetto oggi?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Prompt di sistema / Direttiva per allineare il coach al progetto
  const systemContext = `Sei l'Oracolo e Coach Strategico del progetto LCR-NetFree. 
  Il tuo compito è assistere Dario (lo sviluppatore e ideatore del progetto) e i visitatori del portale.
  Conosci profondamente i pilastri del progetto:
  1. Tokenizzazione RWA (Real World Assets) e Club Deal per la protezione patrimoniale e la stabilità materiale.
  2. Economia del Dono e il Processo Net-Free (le cerchie di cura, la fioritura circolare, la gestione pulita dello spazio personale).
  3. Il Tempio Biologico e la Piena Sovranità Esistenziale (ispirato anche al dialogo con Aldo Pironi e alla sovranità giuridica).
  4. L'approccio olistico, la sincronicità, la frequenza (es. 432Hz) e la visione gilanica di partnership.
  Rispondi sempre con tono saggio, pragmatico, strategico, accogliente e perfettamente sintonizzato su questa frequenza.`;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Simulazione intelligente di risposta del coach basata sul contesto del progetto
      // (Qui puoi collegare in seguito un'API backend se desideri un'intelligenza LLM live)
      setTimeout(() => {
        let reply = "Ho analizzato la tua richiesta all'interno del campo di LCR-NetFree. ";
        
        const lower = userMessage.toLowerCase();
        if (lower.includes('token') || lower.includes('rwa') || lower.includes('soldi') || lower.includes('patrimonio')) {
          reply += "Sul fronte della tokenizzazione RWA, ricorda che l'obiettivo è ancorare la sicurezza a beni reali e tangibili, liberando la famiglia dall'ansia della scarsità attraverso i Club Deal strutturati.";
        } else if (lower.includes('netfree') || lower.includes('cerchia') || lower.includes('dono')) {
          reply += "Per quanto riguarda il processo Net-Free, il fulcro è sempre il presidio del proprio spazio: prima stabilisci la tua radice, poi attivi la cerchia ristretta di cura basata sul mutuo soccorso e sull'economia del dono.";
        } else if (lower.includes('sovranità') || lower.includes('legale') || lower.includes('aldo')) {
          reply += "La piena sovranità passa attraverso il riconoscimento del tempio biologico e il superamento dei vincoli della finzione commerciale. Rimani centrato sui principi naturali e sul dialogo con i presidi di coscienza.";
        } else {
          reply += "Ricorda di mantenere la visione frattale: ogni passo (dalla centratura energetica alla protezione materiale, fino alla cerchia) si sostiene a vicenda in armonia con la frequenza del progetto.";
        }

        setMessages([...newMessages, { role: 'assistant', content: reply }]);
        setIsLoading(false);
      }, 800);

    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "C'è stata una piccola interferenza nel campo energetico. Riprova a formulare la domanda." }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-stone-900 text-stone-50 shadow-2xl hover:bg-stone-800 transition-all border border-stone-700 font-serif text-xs font-semibold cursor-pointer group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Oracolo & AI Coach</span>
        </button>
      ) : (
        <div className="w-[340px] sm:w-[400px] h-[500px] rounded-3xl bg-stone-900 text-stone-50 shadow-2xl border border-stone-700/80 flex flex-col backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
          
          {/* Header della Chat */}
          <div className="p-4 bg-stone-800/90 border-b border-stone-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-stone-100">Oracolo & AI Coach</h4>
                <p className="text-[10px] text-emerald-400 font-mono">● Connesso al Campo LCR</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-stone-700 text-stone-300 hover:text-stone-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Storico Messaggi */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-serif text-xs">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3" />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-amber-400 text-stone-900 font-medium rounded-tr-none' 
                    : 'bg-stone-800 text-stone-200 border border-stone-700/60 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-stone-700 text-stone-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-stone-400 italic text-[11px]">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>L'Oracolo sta interrogando il campo...</span>
              </div>
            )}
          </div>

          {/* Input di invio */}
          <form onSubmit={handleSend} className="p-3 bg-stone-800/80 border-t border-stone-700/60 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedi al coach del progetto..."
              className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-xs font-serif focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-900 flex items-center justify-center transition-all cursor-pointer flex-shrink-0 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
