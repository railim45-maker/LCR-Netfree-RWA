import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, TrendingUp, Users, Award, Coins, ArrowRight, CheckCircle2, Sparkles, FileText, Calendar, Clock, UserCheck, AlertCircle } from "lucide-react";

export default function ClubDeal() {
  // Stati per il form di iscrizione al webinar di Nicole
  const [formData, setFormData] = useState({ name: "", surname: "", phone: "", email: "" });
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWebinarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulazione del controllo IP / frequenza iscrizioni (strategia anti-perditempo)
    // In un contesto reale, questo controllo viene eseguito sul backend verificando la tabella degli accessi IP.
    const ipTrackerKey = "lcr_webinar_attempts";
    const lastAttemptTimeKey = "lcr_webinar_lockout";
    
    const now = Date.now();
    const lockoutUntil = localStorage.getItem(lastAttemptTimeKey);
    
    if (lockoutUntil && now < parseInt(lockoutUntil, 10)) {
      setErrorMessage("Hai esaurito i tentativi di iscrizione precedenti senza partecipare. Per favore riprova tra 15 giorni.");
      return;
    }

    let attempts = JSON.parse(localStorage.getItem(ipTrackerKey) || "[]");
    // Aggiungiamo l'tentativo corrente
    attempts.push(now);
    localStorage.setItem(ipTrackerKey, JSON.stringify(attempts));

    // Se l'utente ha fatto iscrizioni a vuoto (simulazione logica anti-perditempo)
    if (attempts.length >= 3) {
      const fifteenDays = 15 * 24 * 60 * 60 * 1000;
      localStorage.setItem(lastAttemptTimeKey, (now + fifteenDays).toString());
      localStorage.removeItem(ipTrackerKey);
      setErrorMessage("Registriamo un'alta percentuale di mancata presenza ai nostri incontri formativi. Per rispetto di chi desidera partecipare, l'accesso è temporaneamente bloccato per 15 giorni.");
      return;
    }

    // Successo iscrizione
    setIsRegistered(true);
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen relative text-foreground space-y-28 pb-36 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO DELL'ALBERO SU TUTTA LA PAGINA */}
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* 1. INTRODUZIONE AI PROSPETTI E AL PROTOCOLLO */}
      <section className="container max-w-5xl mx-auto px-6 pt-36 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/20 text-primary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md">
          <Sparkles className="w-4 h-4" /> Prospetti Analitici e Opportunità
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-[1.1]">
          Il Protocollo di Tokenizzazione<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-yellow-200">
            e i Ruoli nell'Ecosistema
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-light">
          Un'infrastruttura trasparente basata su beni reali. Scopri come puoi inserirti all'interno del percorso in base alla tua vocazione, alle tue risorse e ai vantaggi riservati a ciascun ruolo.
        </p>
      </section>

      {/* 2. SEZIONE PROTOCOLLO E SCENARI DI TOKENIZZAZIONE */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Analisi Finanziaria</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif-display">I Due Scenari di Rendimento (Licenza d'uso 5 anni)</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Fee di emissione NFT del <strong>0,75%</strong> una tantum sul valore del bene, calcolata con precisione su ogni fascia di asset[cite: 1, 2].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SCENARIO A */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-mono text-primary font-bold">Scenario A</span>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-primary/10 text-primary">Con Sostegno Dedicato</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Rendita Passiva Annua: 2,00%</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rendita semestrale dell'1,00%[cite: 1]. Con una fee di tokenizzazione del 0,75% una tantum[cite: 1, 2], la rendita annua netta media su 5 anni si attesta all'<strong>1,85%</strong>[cite: 1], per un totale netto complessivo del <strong>9,25%</strong>[cite: 1] (dopo aver coperto il costo dell'NFT[cite: 1]).
              </p>

              <div className="p-4 rounded-2xl bg-background/50 border border-border/60 space-y-2 text-xs">
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Costo Emissione NFT:</span> <span className="text-foreground">0,75% una tantum</span>[cite: 1, 2]</div>
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Rendita Semestrale:</span> <span className="text-primary">+1,00%</span>[cite: 1]</div>
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Totale Netto (5 Anni):</span> <span className="text-primary font-bold">+9,25%</span>[cite: 1]</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-muted-foreground italic">
              Esempio su Asset da €1.000.000: Costo NFT €7.500[cite: 1], Rendita Totale Netta €92.500[cite: 1].
            </div>
          </div>

          {/* SCENARIO B */}
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-mono text-primary font-bold">Scenario B</span>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-primary/20 text-primary font-bold">Rendimento Ottimizzato</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Rendita Passiva Annua: 2,50%</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rendita semestrale dell'1,25%[cite: 1]. Mantenendo la fee di tokenizzazione dello 0,75% una tantum[cite: 1, 2], la rendita annua netta media su 5 anni sale al <strong>2,35%</strong>[cite: 1], per un totale netto complessivo dell'<strong>11,75%</strong>[cite: 1].
              </p>

              <div className="p-4 rounded-2xl bg-background/50 border border-border/60 space-y-2 text-xs">
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Costo Emissione NFT:</span> <span className="text-foreground">0,75% una tantum</span>[cite: 1, 2]</div>
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Rendita Semestrale:</span> <span className="text-primary">+1,25%</span>[cite: 1]</div>
                <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Totale Netto (5 Anni):</span> <span className="text-primary font-bold">+11,75%</span>[cite: 1]</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-muted-foreground italic">
              Esempio su Asset da €1.000.000: Costo NFT €7.500[cite: 1], Rendita Totale Netta €117.500[cite: 1].
            </div>
          </div>

        </div>
      </section>

      {/* 3. TABELLA COMPARATIVA DEI VALORI ECONOMICI */}
      <section className="container max-w-6xl mx-auto px-6 space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Prontuario Ufficiale</span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-display">Tabella Comparativa dei Valori Economici</h2>
          <p className="text-sm text-muted-foreground">Rendite nette calcolate su un orizzonte di 5 anni al netto del costo NFT (0,75%)[cite: 1].</p>
        </div>

        <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/50 border-b border-border text-muted-foreground uppercase font-mono">
                <tr>
                  <th className="p-4">Valore del Bene</th>
                  <th className="p-4">Costo Emissione NFT (0,75%)</th>
                  <th className="p-4">Totale Netto - Scenario A (9,25%)[cite: 1]</th>
                  <th className="p-4">Totale Netto - Scenario B (11,75%)[cite: 1]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 100.000</td>
                  <td className="p-4 text-muted-foreground">€ 750,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 9.250,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 11.750,00[cite: 1]</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 300.000</td>
                  <td className="p-4 text-muted-foreground">€ 2.250,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 27.750,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 35.250,00[cite: 1]</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 500.000</td>
                  <td className="p-4 text-muted-foreground">€ 3.750,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 46.250,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 58.750,00[cite: 1]</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 1.000.000</td>
                  <td className="p-4 text-muted-foreground">€ 7.500,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 92.500,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 117.500,00[cite: 1]</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 5.000.000</td>
                  <td className="p-4 text-muted-foreground">€ 37.500,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 462.500,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 587.500,00[cite: 1]</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 font-bold">€ 10.000.000</td>
                  <td className="p-4 text-muted-foreground">€ 75.000,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 925.000,00[cite: 1]</td>
                  <td className="p-4 text-primary font-semibold">€ 1.175.000,00[cite: 1]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. I SEI RUOLI DELL'ECOSISTEMA E I LORO VANTAGGI (POSIZIONATI DOPO LA SPIEGAZIONE) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Architettura dei Ruoli</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Come Vuoi Partecipare all'Ecosistema?</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Sei ruoli distinti pensati per valorizzare le competenze, il capitale e la vocazione di ciascuno, garantendo vantaggi chiari e trasparenti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Protocollo Base */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">1. Proprietario (Protocollo Base)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi possiede un asset immobiliare o materiale e sceglie di tokenizzarlo tramite il protocollo standard, sostenendo la fee di emissione per accedere ai flussi di rendita.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Rendita passiva periodica garantita
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Liquidità e digitalizzazione dell'asset
              </div>
            </div>
          </div>

          {/* 2. Protocollo a 0 Costi */}
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">2. Proprietario (Protocollo a 0 Costi)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi possiede un asset ma azzera interamente i costi di emissione iniziali grazie al supporto del protocollo e dei sostenitori strategici.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Costo NFT azzerato (0 costi vivi)
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Zero attriti burocratici e finanziari
              </div>
            </div>
          </div>

          {/* 3. Informatori */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">3. Diventare Informatori</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi sceglie di diffondere l'informazione e far conoscere l'ecosistema, attivando il primo livello di connessione e divulgazione consapevole.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Partecipazione attiva al network
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Riconoscimento del valore divulgativo
              </div>
            </div>
          </div>

          {/* 4. Responsabili Formatori */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">4. Responsabili di Formatori</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi coordina e guida gruppi di formatori, gestendo lo sviluppo della rete e la diffusione strutturata dei percorsi di consapevolezza e autodeterminazione.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Ruolo di coordinamento strategico
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Proventi legati allo sviluppo del team
              </div>
            </div>
          </div>

          {/* 5. Contributo Economico Diretto */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">5. Sostegno Economico</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi contribuisce economicamente per dare l'opportunità a nuovi progetti o asset di partire, alimentando i flussi di crescita dell'infrastruttura.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Partecipazione ai rendimenti generati
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Impatto diretto sulla collettività
              </div>
            </div>
          </div>

          {/* 6. Presentatore di Capitali */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">6. Presentatore di Capitali</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chi presenta soggetti o investitori dotati di mezzi e disponibilità economiche per sostenere la crescita su larga scala dell'ecosistema.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Riconoscimento meritocratico di alto livello
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Connessione strategica di grande impatto
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SEZIONE WEBINAR DI NICOLE CON SISTEMA DI PRENOTAZIONE E FUNNEL ANTI-PERDITEMPO */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Formazione in Diretta</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif-display">Partecipa al Webinar Esclusivo con Nicole</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Prenota il tuo posto per seguire la spiegazione approfondita in diretta. Riceverai il link di accesso e il messaggio di invito automatizzato.
            </p>
          </div>

          {!isRegistered ? (
            <form onSubmit={handleWebinarSubmit} className="space-y-4 max-w-xl mx-auto">
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Nome</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Cognome</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Il tuo cognome"
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Cellulare</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Il tuo numero di cellulare"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-bold py-6 rounded-full shadow-lg">
                  Prenota il Posto in Diretta <Calendar className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-[10px] text-center text-muted-foreground pt-2">
                  Nota: per garantire la qualità dell'aula virtuale e il rispetto del tempo dei relatori, chi prenota e non partecipa ripetutamente vedrà limitate le future prenotazioni.
                </p>
              </div>
            </form>
          ) : (
            <div className="space-y-6 text-center py-6 bg-primary/5 rounded-3xl p-8 border border-primary/30 animate-in fade-in duration-500">
              <UserCheck className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif-display">Registrazione Effettuata con Successo!</h3>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Grazie <strong>{formData.name}</strong>. Abbiamo inviato un messaggio di conferma e il link di invito automatico all'indirizzo <strong>{formData.email}</strong> e al numero <strong>{formData.phone}</strong>.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/80 text-xs text-left space-y-2 max-w-md mx-auto">
                <div className="font-bold text-primary flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Messaggio di Invito Automatico Inviato:
                </div>
                <p className="text-muted-foreground italic">
                  "Benvenuto nell'Ecosistema, {formData.name}. La tua prenotazione per il webinar guidato da Nicole è confermata. Ti aspettiamo in aula virtuale. Ricorda di accedere puntualmente per vivere l'esperienza completa del nuovo paradigma."
                </p>
              </div>
              <div className="pt-2">
                <Button variant="outline" onClick={() => setIsRegistered(false)} className="text-xs">
                  Registra un'altra persona
                </Button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. CALL TO ACTION FINALE */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-background p-12 md:p-16 text-center space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Il Futuro Inizia Adesso</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Pronto a fare il prossimo passo?</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Esplora i dettagli, partecipa agli incontri formativi e unisciti a noi nel percorso di libertà e prosperità condivisa.
            </p>
            <div className="pt-2">
              <Link href="/">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] text-base transition-all transform hover:scale-105">
                  Torna alla Home <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
